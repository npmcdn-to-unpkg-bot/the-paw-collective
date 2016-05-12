'use strict';

(function() {

    function InterviewDataService($http) {

        // Gets a list of Animals
        this.index = (cb) => {
            $http.get('/api/interview').then(cb)
        }

        // Gets a single Animal from the DB
        this.show = (id, cb) => {
            $http.get(`/api/interview/${id}`).then(cb)
        }
    }

    angular.module('animalCollectiveApp')
        .service('InterviewDataService', InterviewDataService)
})()
