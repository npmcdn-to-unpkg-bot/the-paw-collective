'use strict';

(function() {

    class adminInterviewComponent {
        constructor($http, $q, $interval, $rootScope, adminAnimalDataService) {
            this.$http = $http
            this.$q = $q
            this.$interval = $interval
            this.animal = {}
            this.adminAnimalDataService = adminAnimalDataService

            this.items = []
        

            this.images = {
                owner: [{
                    data64: '',
                    file: ''
                }],
                animal: [{
                    data64: '',
                    file: ''
                }]
            }

            this.animalCategory = adminAnimalDataService.animals
            $rootScope.title = "Create an Animal"
        }

        upload(interviews, animalCroppedData, animalCroppedData2) {
            // console.log(name, this.items, this.file, this.file2)

            this.images.owner[0].data64 = animalCroppedData
            this.images.owner[0].file = this.file
            
            this.images.animal[0].data64 = animalCroppedData2
            this.images.animal[0].file = this.file2

            this.adminAnimalDataService.updateInterviewAPI(interviews, this.images, this.items)


            // if (!this.file) {
            //     alert('You need to upload an image')
            //     return
            // }

            // this.indicatorStatus = 'Saving...'
            // this.exporting = true

            // this.adminAnimalDataService.updateInterviewAPI(animal, croppedUrl, this.file, (result) => {
            //     console.log('The result is', result)
            //     this.indicatorStatus = 'Finished!'
            //     this.exporting = false
            //     this.animal = {}
            //     this.file = ''
            //     this.removeImagePlaceholder = false
            //     this.animal.category = 'Dog'

            //     // After 2 seconds, set the status to an empty string
            //     this.$interval(() => {
            //         this.indicatorStatus = ''
            //     }, 2000)
            // })
        }

        imageDropped() {
            this.removeImagePlaceholder = true
        }

        imageDropped2() {
            this.removeImagePlaceholder2 = true
        }

        imageChange(data) {
            this.images[1].data64 = data
            console.log(this.images)
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
