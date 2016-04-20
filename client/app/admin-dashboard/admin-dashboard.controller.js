'use strict';

(function() {

    class AdminDashboardController {
        constructor($location) {
            this.$location = $location;
            this.title = "The Dashboard";
        }

        isActive(route) {
            return route === this.$location.path();
        }
    }

    angular.module('animalCollectiveApp.dashboard')
        .controller('AdminDashboardController', AdminDashboardController);

})();
