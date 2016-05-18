'use strict';

(function() {

    class AdminDashboardController {

        constructor($http, $location, $rootScope, $route, AnimalDataService) {

            this.$location = $location
            this.$http = $http
            this.$route = $route
            this.AnimalDataService = AnimalDataService

            $rootScope.title = "Animal Dashboard"

            this.onInit()
        }

        onInit() {
            // Animal Data
            this.AnimalDataService.index((response) => {
                this.animalCollections = response.data
            })
        }

        remove(animal) {
            // Delete an Animal
            this.$http.delete(`/api/animal/${animal._id}`)

            let index = this.animalCollections.indexOf(animal)
            this.animalCollections.splice(index, 1)
        }

        isActive(route) {
            return route === this.$location.path()
        }
    }

    angular.module('paw_collective.dashboard')
        .controller('AdminDashboardController', AdminDashboardController)
})()
