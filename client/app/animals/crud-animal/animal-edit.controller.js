'use strict';

(function() {

    class adminAnimalEdit {
        constructor($http, $routeParams, $rootScope, AnimalDataService) {
            this.$http = $http
            this.$routeParams = $routeParams
            this.AnimalDataService = AnimalDataService
            
            this.animal = {}
            this.animalCategory = AnimalDataService.animals
            
            $rootScope.title = "Edit an Animal"
            this.onInit()
        }

        onInit() {
            this.AnimalDataService.show(this.$routeParams.id, (result) => {
                this.animal = result

                this.animal.name = result.data.name
                this.animal.instagram = result.data.instagram
                this.animal.category = result.data.category
            })
        }

        upload(animal) {

            this.indicatorStatus = 'Saving...'
            this.AnimalDataService.edit(this.$routeParams.id, animal, this.file, (result) => {
                this.indicatorStatus = 'Finished!'
            })
        }
    }

    angular.module('animalCollectiveApp.animals')
        .controller('adminAnimalEdit', adminAnimalEdit)
})()