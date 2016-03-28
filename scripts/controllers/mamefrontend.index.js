'use strict';
angular.module('mamefrontend').controller('indexController', ['$scope', 'BootstrapService', 'StateManagerService',
function($scope, BootstrapService, StateManagerService) {

  let bootstrap = new BootstrapService();
  let stateManager = new StateManagerService();

  $scope.state = state => stateManager.isState(state);
  $scope.setState = state => {
    stateManager.setState(state);
  };
  $scope.setState('MAIN');

  $scope.$on('statechange', function(data) {
    console.log(data);
  });

  console.log(stateManager.currentState());

}]);
