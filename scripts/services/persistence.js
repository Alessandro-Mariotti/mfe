'use strict';
angular.module('mamefrontend').service('PersistenceService', ['$rootScope', function($rootScope) {

    function Persistence() {
        this.db = new PouchDB('mfe');
    }

    Persistence.prototype.info = function() {
        return this.db.info();
    };

    Persistence.prototype.loadSystems = function() {
        return this.db.allDocs({
            include_docs: true
        });
    };

    Persistence.prototype.save = function(system) {
        return this.db.post(system);
    };

    return Persistence;

}]);
