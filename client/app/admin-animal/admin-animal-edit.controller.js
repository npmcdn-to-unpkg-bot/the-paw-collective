'use strict';

(function() {

    class adminAnimalEdit {
        constructor($http, $routeParams, adminAnimalDataService) {
            this.$http = $http
            this.$routeParams = $routeParams
            this.adminAnimalDataService = adminAnimalDataService
            this.animal = {}

            this.animalCategory = adminAnimalDataService.animals;
            this.onInit()
        }

        onInit() {
            this.adminAnimalDataService.findAPI(this.$routeParams.id, (result) => {
                console.log('On init')
                this.animal = result

                this.animal.name = result.data.name
                this.animal.instagram = result.data.instagram
                this.animal.category = result.data.category
                this.file = result.data.image
            })
        }

        upload(animal) {

            this.adminAnimalDataService.editAPI(this.$routeParams.id, animal, this.file, (result) => {
                console.log('something happened good', result)
            })
        }
    }

    angular.module('animalCollectiveApp.animals')
        .controller('adminAnimalEdit', adminAnimalEdit)

})()
