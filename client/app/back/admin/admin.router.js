'use strict'

angular.module('paw_collective.admin')
    .config(config)

	function config($routeProvider) {
	    $routeProvider
	        .when('/admin', {
	            templateUrl: 'app/back/admin/admin.html',
	            controller: 'AdminController',
	            controllerAs: 'admin',
	            authenticate: 'admin'
	        })
	}
