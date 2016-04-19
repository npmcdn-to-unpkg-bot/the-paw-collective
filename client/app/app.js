'use strict';

angular.module('animalCollectiveApp', [
  'animalCollectiveApp.auth',
  'animalCollectiveApp.admin',
  'animalCollectiveApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
