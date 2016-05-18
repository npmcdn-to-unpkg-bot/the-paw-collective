'use strict'

angular.module('paw_collective.interview')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-interviews', {
                templateUrl: 'app/back/interviews/dashboard/interviews-dashboard.html',
                controller: 'AdminInterviewDashboardController',
                controllerAs: 'adminInterview',
                authenticate: 'admin'
            })
    })
