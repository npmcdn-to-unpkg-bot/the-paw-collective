'use strict';

(function() {

    class adminAnimalComponent {
        constructor($http, $q, adminAnimalDataService) {
            this.$http = $http
            this.$q = $q
            this.animal = {}
            this.adminAnimalDataService = adminAnimalDataService

            this.animalCategory = adminAnimalDataService.animals;
        }

        upload(animal) {

            if (!this.file) {
                alert('You need to upload an image')
                return
            }

            this.indicatorStatus = 'saving'
            this.adminAnimalDataService.updateAPI(animal, this.file, (result) => {
                console.log('The result is', result)
                this.indicatorStatus = 'finished'
                this.animal = {}
                this.animal.category = 'Dog'
            })
        }
    }

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
        .controller('adminAnimalComponent', adminAnimalComponent)
        .controller('adminAnimalEdit', adminAnimalEdit)

})()
