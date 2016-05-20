'use strict';

(function() {

    class adminInterviewComponent {

        constructor($location, $rootScope, $routeParams, formType, AnimalDataService, InterviewDataService) {
            
            this.formType               = formType
            this.id                     = $routeParams.id
            this.InterviewDataService   = InterviewDataService 
            this.animalCategory         = AnimalDataService.animals          

            this.interview              = {}

            this.articles               = []
            this.itv                    = {}

            $rootScope.title = `${formType.title} an Interview`

            // Editing an item? Fill in the fields!
            if (formType.title === 'Edit') {
                InterviewDataService.show($routeParams.id, (res) => {
                    this.interview = res.data
                })
            }

            // this.editing = false
            // this.onInit()
        }

        // onInit() {
        //     // Check to see if we are editing or creating an Interview

        //     if (typeof this.$routeParams.id != 'undefined') {
        //         // Editing
        //         console.log('editing an interview')
        //         this.editing = true
        //         this.$rootScope.title = "Edit an Interview"

        //         this.InterviewDataService.show(this.$routeParams.id, (result) => {

        //             this.itv.id = result.data._id
        //             this.itv.name = result.data.title
        //             this.itv.ownerName = result.data.owner
        //             this.itv.animal = result.data.animal
        //             this.itv.excerpt = result.data.excerpt
        //             this.itv.images = result.data.images

        //             this.articles = result.data.article
        //         })
        //     } else {
        //         // Creating 
        //         this.editing = false
        //         console.log('creating')
        //         this.$rootScope.title = 'Create an Interview'
        //     }
        // }

        // upload(itv, animalCroppedData, ownerCroppedData) {

        //     if (this.editing) {

        //         if (animalCroppedData || ownerCroppedData) {
        //             // One of them is true
        //             console.log('One image is true or both')

        //             if (animalCroppedData && ownerCroppedData) {
        //                 console.log('changing both photo!')
        //                 let photos = {
        //                     animal: this.myArray[0].dataURI,
        //                     animal_thumbnail: this.myArray[1].dataURI,
        //                     owner: ownerCroppedData
        //                 }

        //                 this.finalize('edit', this.itv.id, this.itv, this.articles, photos)

        //             } else {
        //                 if (animalCroppedData) {
        //                     console.log('only animal')

        //                     let photos = {
        //                         animal: this.myArray[0].dataURI,
        //                         animal_thumbnail: this.myArray[1].dataURI
        //                     }

        //                     this.finalize('edit', this.itv.id, this.itv, this.articles, photos)
        //                 } else {
        //                     console.log('only owner')
        //                     let photos = {
        //                         owner: ownerCroppedData
        //                     }
        //                     this.finalize('edit', this.itv.id, this.itv, this.articles, photos)
        //                 }
        //             }
        //         } else {
        //             console.log('No image uploaded')
        //                 // Just update data & articles
        //             this.finalize('edit', this.itv.id, itv, this.articles)
        //         }
        //     } else {
        //         // New Interview!

        //         let photos = {
        //             animal: this.myArray[0].dataURI,
        //             animal_thumbnail: this.myArray[1].dataURI,
        //             owner: ownerCroppedData
        //         }

        //         this.finalize('upload', '', itv, this.articles, photos)
        //     }
        // }

        // finalize(type, id, data, article, photo) {

        //     console.log('finalizing....')
        //     this.indicatorStatus = 'Saving'
        //     this.InterviewDataService[type](id, data, article, photo, (result) => {
        //         this.indicatorStatus = 'Finished!'
        //         this.exporting = false
        //         this.$location.path("/admin-interviews");
        //     })
        // }

        // add() {
        //     this.articles.push({
        //         question: "",
        //         answer: ""
        //     })
        // }

        // remove(index) {
        //     this.articles.splice(index, 1)
        // }
    }

    angular.module('paw_collective.interview')
        .controller('adminInterviewComponent', adminInterviewComponent)
})()
