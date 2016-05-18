'use strict'

angular.module('paw_collective')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
    })


