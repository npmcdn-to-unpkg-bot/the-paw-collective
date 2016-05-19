'use strict';

(function() {

    class adminAnimalComponent {

        constructor($routeParams, formType, $rootScope, AnimalDataService) {
            this.$routeParams       = $routeParams
            
            this.formType           = formType
            this.id                 = $routeParams.id
            this.AnimalDataService  = AnimalDataService
            this.animalCategory     = AnimalDataService.animals

            this.animal             = {}
            this.file               = ''

            // Set Title for Subheader
            $rootScope.title = `${formType} an Animal`

            // If editing an item, display the current information for that item
            if (formType === 'Edit') {
                AnimalDataService.show($routeParams.id, (res) => this.animal = res.data)
            }
        }
    }

    angular.module('paw_collective.animals')
        .controller('adminAnimalComponent', adminAnimalComponent)
})()
