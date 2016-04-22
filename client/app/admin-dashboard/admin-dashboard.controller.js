'use strict';

(function() {

    class AdminDashboardController {

        constructor($http, $location) {

            this.$location = $location;
            this.$http = $http;
            this.title = "The Dashboard";

            this.onInit()
        }

        onInit() {
            this.$http.get('/api/animal').then(response => {
                console.log('Animals repsonse is', response);
            })
        }

        isActive(route) {
            return route === this.$location.path()
        }
    }

    angular.module('animalCollectiveApp.dashboard')
        .controller('AdminDashboardController', AdminDashboardController)

})()