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
        'ngAnimate', 
        'ngSanitize',
        'ngRoute',
        'ngFileUpload',
        'ngImgCrop',
        'ui.gravatar',
        'validation.match',
        'angular-medium-editor',
        'headroom',
        'cgBusy'
    ])
    .config(($routeProvider, $locationProvider, $compileProvider) => {
        $compileProvider.debugInfoEnabled(false)

        $routeProvider
            .otherwise({
                redirectTo: '/'
            })

        $locationProvider.html5Mode(true)
    })
    .run(($rootScope) => {
        $rootScope.activePromises = []
    })


