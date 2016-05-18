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
                this.idata = result.data;
            })
        }
    }
    
    angular.module('paw_collective')
        .component('interview', {
            templateUrl: 'app/front/interview/interview.html',
            controller: InterviewController,
            controllerAs: 'interview'
        })
})()
