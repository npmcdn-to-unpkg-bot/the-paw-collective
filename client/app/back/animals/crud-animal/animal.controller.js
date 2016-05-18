'use strict';

(function() {

    class adminAnimalComponent {

        constructor($interval, $routeParams, formType, $rootScope, AnimalDataService) {
            this.$interval = $interval
            this.$routeParams = $routeParams
            this.formType = formType

            this.AnimalDataService = AnimalDataService
            this.animalCategory = AnimalDataService.animals

            this.animal = {}
            this.count = 4
            this.file = ''

            $rootScope.title = `${formType} an Animal`

            if (formType === 'Edit') {
                AnimalDataService.show($routeParams.id, (res) => this.animal = res.data)
            }
        }
        // imageDropped() {
        //     this.removeImagePlaceholder = true
        // }
        upload(croppedUrl, animal) {

            this.exporting = true

            this.AnimalDataService[this.formType === 'Edit' ? 'edit' : 'upload'](this.$routeParams.id, animal, croppedUrl, this.file, (result) => {

                this.animal.category = 'Dog'

                this.exporting = false
                this.removeImagePlaceholder = false

                this.animal = {}
                this.file = ''
                
                // After 2 seconds, set the status to an empty string
                this.$interval(() => { this.indicatorStatus = '' }, 2000)
            })
        }
    }

    angular.module('paw_collective.animals')
        .controller('adminAnimalComponent', adminAnimalComponent)
})()
