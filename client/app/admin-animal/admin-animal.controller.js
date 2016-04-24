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

    angular.module('animalCollectiveApp.animals')
        .controller('adminAnimalComponent', adminAnimalComponent)
})()
