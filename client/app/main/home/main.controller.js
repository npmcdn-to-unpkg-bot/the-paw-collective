'use strict';

(function() {

    class MainController {

        constructor($scope, $rootScope, $http, AnimalDataService) {
            this.$http = $http
            this.$scope = $scope
            this.$rootScope = $rootScope
            this.AnimalDataService = AnimalDataService
        }

        $onInit() {
            this.AnimalDataService.index((result) => {
                this.animals = result.data
                console.log(this.animals)
            })

            // this.$rootScope.activePromises = this.$http.get('/api/animal')
        }
    }

    angular.module('animalCollectiveApp')
        .component('main', {
            templateUrl: 'app/main/home/main.html',
            controller: MainController,
            controllerAs: 'main'
        })

})()
