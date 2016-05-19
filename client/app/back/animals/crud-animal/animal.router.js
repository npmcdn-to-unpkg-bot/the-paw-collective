'use strict'

angular.module('paw_collective.animals')
    .config(function config($routeProvider) {
        $routeProvider
            .when('/admin-dashboard/create-animal', {
                templateUrl: 'app/back/animals/crud-animal/animal.html',
                controller: 'adminAnimalComponent',
                controllerAs: 'adminAnimal',
                authenticate: 'admin', 
                resolve : {
                    formType: () => { return 'Create' }
                }
            })

            .when('/admin-dashboard/edit-animal/:id', {
                templateUrl: 'app/back/animals/crud-animal/animal.html',
                controller: 'adminAnimalComponent',
                controllerAs: 'adminAnimal',
                authenticate: 'admin', 
                resolve : {
                    formType: () => { return 'Edit' }
                }
            })
    })