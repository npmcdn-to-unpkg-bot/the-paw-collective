'use strict';

(function() {

    class AdminDashboardController {

        constructor($http, $location) {

            this.$location = $location
            this.$http = $http
            this.title = "The Dashboard"

            this.onInit()
        }

        onInit() {
            this.$http.get('/api/animal').then(response => {
                this.animalCollections = response.data
            })
        }

        remove(animal) {
            let result = confirm('You sure you want to delete?')

            if (result) {
                this.$http.delete(`/api/animal/${animal._id}`)

                let index = this.animalCollections.indexOf(animal)
                this.animalCollections.splice(index, 1)
            }
        }

        isActive(route) {
            return route === this.$location.path()
        }
    }

    angular.module('animalCollectiveApp.dashboard')
        .controller('AdminDashboardController', AdminDashboardController)

})()