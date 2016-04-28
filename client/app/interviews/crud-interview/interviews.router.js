'use strict'

angular.module('animalCollectiveApp.animals')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-interviews/create-interview', {
                templateUrl: 'app/interviews/crud-interview/interviews.html',
                controller: 'adminInterviewComponent',
                controllerAs: 'adminInterview',
                authenticate: 'admin'
            })
    })
