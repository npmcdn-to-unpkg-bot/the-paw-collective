'use strict';

(function() {

    class MainController {

        constructor($scope, $rootScope, $http, AnimalDataService, InterviewDataService) {
            this.$http = $http
            this.$scope = $scope

            this.AnimalDataService = AnimalDataService
            this.InterviewDataService = InterviewDataService
        }

        $onInit() {
            this.AnimalDataService.index((result) => {
                this.animals = result.data
                console.log(this.animals)
            })

            this.InterviewDataService.index((result) => {
                this.interviews = result.data
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
