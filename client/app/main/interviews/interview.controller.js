'use strict';

(function() {

    class InterviewController {

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
        .component('interview', {
            templateUrl: 'app/main/interviews/interview.html',
            controller: InterviewController,
            controllerAs: 'interview'
        })
})()
