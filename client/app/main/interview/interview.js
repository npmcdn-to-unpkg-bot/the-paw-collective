'use strict'

angular.module('animalCollectiveApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/interview/:id', {
                template: '<interview></interview>'
            })
    })
