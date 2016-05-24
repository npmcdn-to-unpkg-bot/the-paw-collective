'use strict';

(function() {

    class HomeController {

        constructor($http, $window, AnimalDataService, InterviewDataService) {
            this.$http                  = $http
            this.$window                = $window

            this.AnimalDataService      = AnimalDataService
            this.InterviewDataService   = InterviewDataService
        }
        $onInit() {
            // Animal Data
            this.AnimalDataService.index((res) => {
                this.animals = res.data
            })

            // Interview Data
            this.InterviewDataService.index((res) => {
                this.interviews = res.data
            })
        }
        /**
         *
         * @openTab
         * @desc Open Instagram in new tab with given ID
         *
         */
        openTab(id) {
            this.$window.open(`http://www.instagram.com/${id}`, '_blank')
        }
    }

    angular.module('paw_collective')
        .component('home', {
            templateUrl: 'app/front/home/home.html',
            controller: HomeController,
            controllerAs: 'home'
        })
})()
