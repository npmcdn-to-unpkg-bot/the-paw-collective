'use strict'

angular.module('animalCollectiveApp.interview')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-interviews', {
                templateUrl: 'app/interviews/dashboard/interviews-dashboard.html',
                controller: 'AdminInterviewDashboardController',
                controllerAs: 'adminInterview',
                authenticate: 'admin'
            })
    })
