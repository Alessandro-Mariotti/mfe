'use strict';
angular.module('mamefrontend').controller('indexController', ['$rootScope', '$scope', 'BootstrapService', 'StateManagerService', 'PersistenceService',
function($rootScope, $scope, BootstrapService, StateManagerService, PersistenceService) {

        let bootstrap = new BootstrapService();
        let stateManager = new StateManagerService();
        let persistence = new PersistenceService();

        persistence.loadSystems().then(function(response) {
            $scope.systems = response.rows;
        });

        $scope.setState = function(state) {
            return stateManager.setState(state);
        };
        $scope.setState('MAIN');
        $scope.isState = function(state) {
            return stateManager.isState(state);
        };
        $scope.state = function() {
            return stateManager.currentState();
        };

        $scope.slug = '/views/main.html';
        $rootScope.$on('statechange', function(event, data) {
            $scope.slug = '/views/' + stateManager.getState().toLowerCase() + '.html';
        });

}]);
