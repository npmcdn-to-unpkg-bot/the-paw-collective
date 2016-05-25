'use strict';

(function() {

    class adminInterviewComponent {

        constructor($location, $rootScope, $routeParams, formType, AnimalDataService, InterviewDataService) {
            
            this.formType               = formType
            this.id                     = $routeParams.id
            this.InterviewDataService   = InterviewDataService 
            this.animalCategory         = AnimalDataService.animals          

            this.interview              = {}
            this.itv                    = {}
            this.articles               = []

            $rootScope.title = `${formType.title} an Interview`

            // Editing an item? Fill in the fields!
            if (formType.title === 'Edit') {
                InterviewDataService.show($routeParams.id, (res) => {
                    this.interview = res.data
                })
            }
        }
    }

    angular.module('paw_collective.interview')
        .controller('adminInterviewComponent', adminInterviewComponent)
})()
