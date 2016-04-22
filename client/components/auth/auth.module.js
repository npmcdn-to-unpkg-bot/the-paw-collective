'use strict';

angular.module('animalCollectiveApp.auth', [
        'animalCollectiveApp.constants',
        'animalCollectiveApp.util',
        'ngCookies',
        'ngRoute'
    ])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor')
    })
