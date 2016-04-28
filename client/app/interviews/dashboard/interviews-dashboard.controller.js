'use strict';

(function() {

    class AdminInterviewDashboardController {

        constructor($http, $location, $rootScope, $route) {

            this.$location = $location
            this.$http = $http
            this.$route = $route
            this.onInit()

            $rootScope.title = "Interview Dashboard"

        }

        onInit() {
            this.$http.get('/api/interview').then(response => {
                this.interviews = response.data
                console.log(response)
            })
        }
    }

    angular.module('animalCollectiveApp.interview')
        .controller('AdminInterviewDashboardController', AdminInterviewDashboardController)

})()
