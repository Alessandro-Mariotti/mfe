angular.module('mamefrontend').service('StateManagerService', ['$rootScope', function($rootScope) {

  const STATES = {
    MAIN: 0,
    SETTINGS: 1,
  };

  function StateManager() {
      this.state = STATES.MAIN;
  };

  StateManager.prototype.currentState = () => {
    return this.state;
  };

  StateManager.prototype.isState = (state) => {
    return this.state === STATES[state];
  };

  StateManager.prototype.setState = (state) => {
    if (this.state !== STATES[state]) {
      $rootScope.$emit('statechange', [this.state, STATES[state]]);
      this.state = STATES[state];
    }
  };

  return StateManager;
}]);
