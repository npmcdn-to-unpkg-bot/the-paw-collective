'use strict';

(function() {
    class interviewFormCtrl {
        constructor(InterviewDataService, $routeParams, $timeout, $location, $interval) {

            this.InterviewDataService 	= InterviewDataService
            this.$interval 				= $interval
            this.$location 				= $location
            this.$routeParams 			= $routeParams

            this.articles 				= []
            this.interview 				= {}
            this.itv                    = {}

            InterviewDataService.show($routeParams.id, (res) => {
                this.interview = res.data
            })
        }
        $onInit() {
            // Check to see if we are editing or creating an Interview

            if (typeof this.$routeParams.id != 'undefined') {
                // Editing
                console.log('editing an interview')

                this.InterviewDataService.show(this.$routeParams.id, (result) => {

                    this.itv.id = result.data._id
                    this.itv.name = result.data.title
                    this.itv.ownerName = result.data.owner
                    this.itv.animal = result.data.animal
                    this.itv.excerpt = result.data.excerpt
                    this.itv.images = result.data.images

                    this.articles = result.data.article
                })
            }
        }
        finalize(type, id, data, article, photo) {

            console.log('finalizing....')
            this.indicator = 'Saving'
            this.InterviewDataService[type](id, data, article, photo, (result) => {
                this.indicator = 'Finished!'
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
        upload(formType, information, animalCroppedData, animalArray, ownerCroppedData) {
            if (formType.title == 'Edit') {

                if (animalCroppedData || ownerCroppedData) {
                    // One of them is true
                    console.log('One image is true or both')

                    if (animalCroppedData && ownerCroppedData) {
                        console.log('changing both photo!')
                        let photos = {
                            animal: animalArray[0].dataURI,
                            animal_thumbnail: animalArray[1].dataURI,
                            owner: ownerCroppedData
                        }

                        this.finalize('edit', this.itv.id, this.itv, this.articles, photos)

                    } else {
                        if (animalCroppedData) {
                            console.log('only animal')

                            let photos = {
                                animal: animalArray[0].dataURI,
                                animal_thumbnail: animalArray[1].dataURI
                            }

                            this.finalize('edit', this.itv.id, this.itv, this.articles, photos)
                        } else {
                            console.log('only owner')
                            let photos = {
                                owner: ownerCroppedData
                            }
                            this.finalize('edit', this.itv.id, this.itv, this.articles, photos)
                        }
                    }
                } else {
                    console.log('No image uploaded')
                        // Just update data & articles
                    this.finalize('edit', this.itv.id, itv, this.articles)
                }
            } else {
                // New Interview!

                let photos = {
                    animal: animalArray[0].dataURI,
                    animal_thumbnail: animalArray[1].dataURI,
                    owner: ownerCroppedData
                }

                this.finalize('upload', '', itv, this.articles, photos)
            }
        }
    }

    angular
        .module('paw_collective')
        .component('formInterviewComponent', {
            bindings: {
                category: '=',
                file: '=',
                formtype: '=',
                id: '='
            },
            templateUrl: 'components/form/form-interview.html',
            controller: interviewFormCtrl
        })

})()
