'use strict';

(function() {

    class InterviewsController {

        constructor($scope, $http, InterviewDataService) {
            this.$http = $http
            this.InterviewDataService = InterviewDataService
        }

        $onInit() {
            this.InterviewDataService.index((result) => {
                this.interview = result.data
                console.log(this.animals)
            })
        }
    }

    angular.module('animalCollectiveApp')
        .component('interviews', {
            templateUrl: 'app/main/interviews/interviews.html',
            controller: InterviewsController,
            controllerAs: 'interviews'
        })
})()
