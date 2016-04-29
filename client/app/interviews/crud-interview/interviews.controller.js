'use strict';

(function() {

    class adminInterviewComponent {
        constructor($http, $q, $interval, $rootScope, adminAnimalDataService) {
            this.$http = $http
            this.$q = $q
            this.$interval = $interval
            this.adminAnimalDataService = adminAnimalDataService

            this.items = []

            this.animalCategory = adminAnimalDataService.animals
            $rootScope.title = "Create an Animal"
        }

        upload(interviews, animalCroppedData, animalCroppedData2) {

            if (typeof this.myArray === 'undefined' || !animalCroppedData2) {
                alert('You are missing either the photo of the animl or the owner')
                return
            }

            this.indicatorStatus = 'Saving...'
            this.exporting = true

            let interviewItem = {
                animal: this.myArray[0].dataURI,
                animal_thumbnail: this.myArray[1].dataURI,
                owner: animalCroppedData2
            }

            this.adminAnimalDataService.updateInterviewAPI(interviews, interviewItem, this.items, (result) => {
                console.log('the result is', result)
                this.indicatorStatus = 'Finished!'
                this.exporting = false

            })
        }

        imageDropped() {
            this.removeImagePlaceholder = true
        }

        imageDropped2() {
            this.removeImagePlaceholder2 = true
        }

        imageChange(data) {
            this.images[1].data64 = data
        }

        add() {
            this.items.push({
                question: "",
                answer: ""
            })
        }

        remove(index) {
            this.items.splice(index, 1)
        }

    }

    angular.module('animalCollectiveApp.interview')
        .controller('adminInterviewComponent', adminInterviewComponent)
})()
