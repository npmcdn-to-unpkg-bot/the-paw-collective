'use strict'

angular.module('animalCollectiveApp.animals')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-dashboard/create-animal', {
                templateUrl: 'app/animals/crud-animal/animal.html',
                controller: 'adminAnimalComponent',
                controllerAs: 'adminAnimal',
                authenticate: 'admin'
            })

            .when('/admin-dashboard/edit-animal/:id', {
				templateUrl: 'app/animals/crud-animal/animal.html',
				controller: 'adminAnimalEdit',
				controllerAs: 'adminAnimal',
				authenticate: 'admin'
            })
    })
