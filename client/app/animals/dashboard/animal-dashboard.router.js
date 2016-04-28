'use strict'

angular.module('animalCollectiveApp.dashboard')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-dashboard', {
                templateUrl: 'app/animals/dashboard/animal-dashboard.html',
                controller: 'AdminDashboardController',
                controllerAs: 'adminDashboard',
                authenticate: 'admin'
            })
    })
