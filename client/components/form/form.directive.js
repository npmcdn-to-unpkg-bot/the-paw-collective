'use strict';

(function() {

    class formCtrl {
        constructor(AnimalDataService, $timeout, $interval) {

            this.AnimalDataService  = AnimalDataService
            this.$interval          = $interval
            this.articles           = []
        }
        $onInit() {

            // Is it an Interview?
            if (this.formtype.isInterview) {
                this.showInterview = true
                this.articles = this.data.article
            }
            
        }
        addInterview() {
            
            // this.articles.push({
            //     question: "",
            //     answer: ""
            // })
            console.log('adding interview')
            console.log(this.articles)
        }
        removeInterview(index) {
            this.articles.splice(index, 1)
        }
        imageDropped() {
            console.log('image dropped!')
        }
        upload(formType, croppedUrlData, information) {
            this.indicator = 'Uploading'
            this.AnimalDataService[formType.title === 'Edit' ? 'edit' : 'upload'](this.id, information, croppedUrlData, (result) => {
                // Finished Uploading
                this.indicator = 'Finished'
                this.$interval(() => { this.indicator = '' }, 2000)
            })
        }
    }

    angular
        .module('paw_collective')
        .component('formComponent', {
            bindings: {
                data        : '=',
                category    : '=',
                file        : '=',
                formtype    : '=',
                id          : '='            },
            templateUrl: 'components/form/form.html',
            controller: formCtrl
        })
})()
