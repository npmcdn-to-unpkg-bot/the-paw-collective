'use strict';

(function() {

    class adminAnimalComponent {
        constructor($http, $q, adminAnimalDataService) {
            this.$http = $http
            this.$q = $q
            this.animal = {}
            this.adminAnimalDataService = adminAnimalDataService

            this.animalCategory = [{
                text: 'Dog'
            }, {
                text: 'Cat'
            }, {
                text: 'Others'
            }];
        }

        upload(animal) {

            if (!this.file) {
                alert('You need to upload an image')
                return
            }

            console.log(animal)
          

            this.indicatorStatus = 'saving'
            this.adminAnimalDataService.updateAPI(animal, this.file, (result) => {
                console.log('The result is', result)
                this.indicatorStatus = 'finished'
                this.animal = {}
                this.animal.category='Dog'
            })

        }
    }

    class adminAnimalEdit {
        constructor($http, $routeParams, adminAnimalDataService) {
            this.$http = $http
            this.$routeParams = $routeParams
            this.adminAnimalDataService = adminAnimalDataService
            this.animal = {}

            this.onInit()
        }

        onInit() {
            this.adminAnimalDataService.findAPI(this.$routeParams.id, (result) => {
                console.log(result)
                this.animal.name = result.data.name
                this.animal.instagram = result.data.instagram

            })
        }


    }

    angular.module('animalCollectiveApp.animals')
        .controller('adminAnimalComponent', adminAnimalComponent)
        .controller('adminAnimalEdit', adminAnimalEdit)

})()
