'use strict';

(function() {

    class MainController {

        constructor($http, AnimalDataService) {
            this.$http = $http
            this.AnimalDataService = AnimalDataService
        }

        $onInit() {
            this.AnimalDataService.index((result) => {
                this.animals = result.data
            })
        }
    }

    angular.module('animalCollectiveApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController,
            controllerAs: 'main'
        })

})()
