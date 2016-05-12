'use strict';

(function() {

    class InterviewController {

        constructor($scope,  $routeParams, $http, InterviewDataService) {
            this.$http = $http
            this.$routeParams = $routeParams
            this.InterviewDataService = InterviewDataService
        }

        $onInit() {
            this.InterviewDataService.showByTitle(this.$routeParams.id, (result) => {
                console.log('the result is', result)
            })
        }
    }

    angular.module('animalCollectiveApp')
        .component('interview', {
            templateUrl: 'app/main/interview/interview.html',
            controller: InterviewController,
            controllerAs: 'interview'
        })
})()
