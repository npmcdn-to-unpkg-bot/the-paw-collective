'use strict'

angular.module('animalCollectiveApp', [
        'animalCollectiveApp.auth',
        'animalCollectiveApp.admin',
        'animalCollectiveApp.constants',
        'animalCollectiveApp.dashboard',
        'animalCollectiveApp.interview',
        'animalCollectiveApp.animals',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngFileUpload',
        'ngImgCrop',
        'ui.gravatar',
        'validation.match',
        'angular-medium-editor'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            })

        $locationProvider.html5Mode(true)
    })
