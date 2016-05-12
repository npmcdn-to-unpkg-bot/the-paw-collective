'use strict';

(function() {

    class MainController {

        constructor($scope, $http, AnimalDataService) {
            this.$http = $http
            this.AnimalDataService = AnimalDataService
        }

        $onInit() {
            this.AnimalDataService.index((result) => {
                this.animals = result.data
                console.log(this.animals)
            })
        }
    }

    angular.module('animalCollectiveApp')
        .component('main', {
            templateUrl: 'app/main/home/main.html',
            controller: MainController,
            controllerAs: 'main'
        })

})()
