'use strict'

angular.module('paw_collective', [
        'paw_collective.auth',
        'paw_collective.admin',
        'paw_collective.constants',
        'paw_collective.dashboard',
        'paw_collective.interview',
        'paw_collective.animals',
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
        'cgBusy',
        'updateMeta'
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
    .value('cgBusyDefaults', {
        message: 'Loading',
        backdrop: true,
        delay: 10,
        minDuration: 1000
    })
