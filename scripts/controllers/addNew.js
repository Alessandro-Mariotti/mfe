angular.module('mamefrontend').controller('addNewController', ['$scope', function($scope) {

    $scope.systems = [{
        path: {
            exe: '',
            roms: []
        }
    }];
    $scope.system = $scope.systems[0];

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
        console.log($scope.systems);
    };
}]);
