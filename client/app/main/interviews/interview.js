'use strict'

angular.module('animalCollectiveApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/interviews', {
                template: '<interview></interview>'
            })
    })
