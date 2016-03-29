angular.module('mamefrontend').controller('addNewController', ['$scope', 'PersistenceService', function($scope, PersistenceService) {

    $scope.system = {
        type: 'SYSTEM',
        path: {
            exe: '',
            roms: []
        }
    };

    $scope.fileChanged = (prop, element) => {
        switch (prop) {
            case 'exe':
                if (element.files.length > 0) {
                    $scope.$apply(() => {
                        $scope.system.path.exe = element.files[0].path;
                    });
                }
                break;
            default:
                if (element.files.length > 0) {
                    $scope.$apply(() => {
                        $scope.system.path.roms.push(element.files[0].path);
                    });
                }
        }
    };

    $scope.removeRomPath = (index) => {
        $scope.system.path.roms.splice(index, 1);
    };

    $scope.save = () => {
        (new PersistenceService()).save($scope.system).then(function(response) {
            $scope.setState('MAIN');
        });

    };
}]);
