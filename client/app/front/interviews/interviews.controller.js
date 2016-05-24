'use strict';

(function() {

    class InterviewsController {

        constructor($http, InterviewDataService) {
            this.$http                  = $http
            this.InterviewDataService   = InterviewDataService
        }
        $onInit() {
            // Interview Data
            this.InterviewDataService.index((res) => {
                this.interviews = res.data
            })
        }
    }

    angular.module('paw_collective')
        .component('interviews', {
            templateUrl: 'app/front/interviews/interviews.html',
            controller: InterviewsController,
            controllerAs: 'interviews'
        })
})()
