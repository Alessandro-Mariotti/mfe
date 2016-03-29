'use strict';
angular.module('mamefrontend').controller('indexController', ['$rootScope', '$scope', 'BootstrapService', 'StateManagerService', 'PersistenceService',
function($rootScope, $scope, BootstrapService, StateManagerService, PersistenceService) {

        let bootstrap = new BootstrapService();
        let stateManager = new StateManagerService();
        let persistence = new PersistenceService();

        persistence.info().then(info => {
            console.log(info);
        });
        persistence.loadSystems().then(function(response) {
            console.log(response);
        });

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
