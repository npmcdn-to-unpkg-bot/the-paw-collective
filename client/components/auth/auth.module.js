'use strict';

angular.module('paw_collective.auth', [
        'paw_collective.constants',
        'paw_collective.util',
        'ngCookies',
        'ngRoute'
    ])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor')
    })
