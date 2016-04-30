'use strict';

(function() {

    class AdminInterviewDashboardController {

        constructor($http, $location, $rootScope, $route, InterviewDataService) {

            this.$location = $location
            this.$http = $http
            this.$route = $route
            this.InterviewDataService = InterviewDataService
            this.onInit()

            $rootScope.title = "Interview Dashboard"
        }

        onInit() {
            this.InterviewDataService.index((response) => {
                this.interviews = response.data
            })
        }
    }

    angular.module('animalCollectiveApp.interview')
        .controller('AdminInterviewDashboardController', AdminInterviewDashboardController)
})()
