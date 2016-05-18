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

        remove(interview) {
            this.$http.delete(`/api/interview/${interview._id}`)

            let index = this.interviews.indexOf(interview)
            this.interviews.splice(index, 1)
        }
    }

    angular.module('paw_collective.interview')
        .controller('AdminInterviewDashboardController', AdminInterviewDashboardController)
})()
