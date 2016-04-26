'use strict';

(function() {

    class adminAnimalComponent {
        constructor($http, $q, $interval, adminAnimalDataService) {
            this.$http = $http
            this.$q = $q
            this.$interval = $interval
            this.animal = {}
            this.adminAnimalDataService = adminAnimalDataService

            this.animalCategory = adminAnimalDataService.animals;
        }

        upload(croppedUrl, animal) {

            console.log(croppedUrl)
            
            if (!this.file) {
                alert('You need to upload an image')
                return
            }

            this.indicatorStatus = 'Saving...'
            this.exporting = true

            this.adminAnimalDataService.updateAPI(animal, croppedUrl, this.file, (result) => {
                console.log('The result is', result)
                this.indicatorStatus = 'Finished!'
                this.exporting = false
                this.animal = {}
                this.animal.category = 'Dog'

                // After 2 seconds, set the status to an empty string
                this.$interval(() => {
                    this.indicatorStatus = ''
                },2000)
            })
        }
    }

    angular.module('animalCollectiveApp.animals')
        .controller('adminAnimalComponent', adminAnimalComponent)
})()
