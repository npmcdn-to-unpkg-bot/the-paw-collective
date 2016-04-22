'use strict';

angular.module('animalCollectiveApp.animals')
  .config(function($routeProvider) {
    $routeProvider
      .when('/admin-dashboard/create-animal', {
        templateUrl: 'app/admin-animal/admin-animal.html',
        controller: 'AdminDashboardController',
        controllerAs: 'adminAnimal',
        authenticate: 'admin'
      });
  });
