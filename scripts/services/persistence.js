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
            includeDocs: true,
            key: 'system'
        });
    };

    return Persistence;

}]);
