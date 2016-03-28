angular.module('mamefrontend').controller('settingsController', ['$scope', function($scope) {

    $scope.settings = {
        path: {
            mame: '',
            roms: []
        }
    };

    $scope.fileChanged = (prop, element) => {
        switch (prop) {
            case 'mame':
                $scope.$apply(() => {
                    $scope.settings.path.mame = element.files[0];
                });
                break;
            default:
                $scope.$apply(() => {
                    $scope.settings.path.roms.push(element.files[0]);
                });

        }
    };

    $scope.removeRomPath = (index) => {
        $scope.settings.path.roms.splice(index, 1);
    };

}]);
