'use strict'

angular.module('paw_collective')
     .config(function($routeProvider) {
        $routeProvider
            .when('/interview/:id', {
                template: '<interview></interview>'
            })
    })