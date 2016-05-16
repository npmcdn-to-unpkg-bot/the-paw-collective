'use strict';

(function() {

    class MainController {

        constructor($scope, $http, $window, AnimalDataService, InterviewDataService) {
            this.$http = $http
            this.$scope = $scope
            this.$window = $window

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

        openTab(id) {
            this.$window.open(`http://www.instagram.com/${id}`, '_blank')
        }
    }

    angular.module('animalCollectiveApp')
        .component('main', {
            templateUrl: 'app/main/home/main.html',
            controller: MainController,
            controllerAs: 'main'
        })

})()
