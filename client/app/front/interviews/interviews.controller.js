'use strict';

(function() {

    class InterviewsController {

        constructor() {
           
        }
    }

    angular.module('paw_collective')
        .component('interviews', {
            templateUrl: 'app/front/interviews/interviews.html',
            controller: InterviewsController,
            controllerAs: 'interviews'
        })
})()
