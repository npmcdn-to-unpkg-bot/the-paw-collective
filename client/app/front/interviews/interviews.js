'use strict'

angular.module('paw_collective')
    .config(function($routeProvider) {
        $routeProvider
            .when('/interviews', {
                template: '<interviews></interviews>'
            })
    })