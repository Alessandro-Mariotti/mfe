'use strict';
angular.module('mamefrontend').controller('indexController', ['$rootScope', '$scope', 'BootstrapService', 'StateManagerService',
function($rootScope, $scope, BootstrapService, StateManagerService) {

        let bootstrap = new BootstrapService();
        let stateManager = new StateManagerService();

        $scope.isState = state => stateManager.isState(state);
        $scope.setState = state => {
            stateManager.setState(state);
        };
        $scope.state = () => stateManager.currentState();
        $scope.setState('MAIN');

        $rootScope.$on('statechange', function(event, data) {
            console.log(data);
        });

        $scope.getInclude = () => '/views/' + stateManager.getState().toLowerCase() + '.html';

}]);
