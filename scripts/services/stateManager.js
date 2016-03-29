angular.module('mamefrontend').service('StateManagerService', ['$rootScope', function($rootScope) {

    const states = ['MAIN', 'ADD_NEW', 'SETTINGS'];
    const MAIN = 0;
    const ADD_NEW = 1;
    const SETTINGS = 2;

    function StateManager() {
        this.state = states[MAIN];
    };

    StateManager.prototype.currentState = function() {
        return this.state;
    };

    StateManager.prototype.isState = function(state) {
        return this.state === states[state];
    };

    StateManager.prototype.setState = function(state) {
        if (this.state !== state) {
            $rootScope.$emit('statechange', [this.state, state]);
            this.state = states[state];
        }
    };
    StateManager.prototype.getState = () => {
        return states.filter(function(state) {
            return this.state === state;
        });
    };

    return StateManager;
}]);
