'use strict'

angular.module('paw_collective.dashboard')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-dashboard', {
                templateUrl: 'app/back/animals/dashboard/animal-dashboard.html',
                controller: 'AdminDashboardController',
                controllerAs: 'adminDashboard',
                authenticate: 'admin'
            })
    })