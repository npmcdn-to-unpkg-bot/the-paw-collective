'use strict';

(function() {

    class adminInterviewComponent {
        constructor($location, $rootScope, InterviewDataService) {
            this.$location = $location
            this.InterviewDataService = InterviewDataService
            this.articles = []

            console.log('interview', InterviewDataService)

            $rootScope.title = "Create an Interview"
        }

        upload(data, animalCroppedData, ownerCroppedData) {

            if (typeof this.myArray === 'undefined' || !ownerCroppedData) {
                alert('You are missing either the photo of the animl or the owner')
                return
            }

            this.indicatorStatus = 'Saving...'
            this.exporting = true

            let photos = {
                animal: this.myArray[0].dataURI,
                animal_thumbnail: this.myArray[1].dataURI,
                owner: ownerCroppedData
            }


            this.InterviewDataService.upload(data, photos, this.articles, (result) => {
                this.indicatorStatus = 'Finished!'
                this.exporting = false
                this.$location.path("/admin-interviews");
            })
        }

        add() {
            this.articles.push({
                question: "",
                answer: ""
            })
        }

        remove(index) {
            this.articles.splice(index, 1)
        }
    }

    angular.module('animalCollectiveApp.interview')
        .controller('adminInterviewComponent', adminInterviewComponent)
})()
