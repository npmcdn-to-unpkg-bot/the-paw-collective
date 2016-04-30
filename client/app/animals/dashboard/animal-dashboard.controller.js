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
            this.AnimalDataService.index((response) => {
                this.animalCollections = response.data
            })
        }

        remove(animal) {
            this.$http.delete(`/api/animal/${animal._id}`)

            let index = this.animalCollections.indexOf(animal)
            this.animalCollections.splice(index, 1)
        }

        isActive(route) {
            return route === this.$location.path()
        }
    }

    angular.module('animalCollectiveApp.dashboard')
        .controller('AdminDashboardController', AdminDashboardController)

})()
