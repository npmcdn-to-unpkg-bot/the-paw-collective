'use strict';

(function() {

    class formCtrl {
        constructor(AnimalDataService, $interval) {
            this.AnimalDataService  = AnimalDataService
            this.$interval          = $interval
        }
        $onInit() {
            console.log('init....')
        }
        imageDropped() {
            console.log('image dropped!')
        }
        upload(formType, croppedUrlData, information) {
            this.indicator = 'Uploading'
            this.AnimalDataService[formType === 'Edit' ? 'edit' : 'upload'](this.id, information, croppedUrlData, (result) => {
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
                id          : '='
            },
            templateUrl: 'components/form/form.html',
            controller: formCtrl
        })
})()
