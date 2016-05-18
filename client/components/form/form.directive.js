'use strict';

(function() {

    class formCtrl {
        constructor(AnimalDataService) {
            
        }
        $onInit() {
            console.log('init....')
        }
        imageDropped() {
            console.log('image dropped!')
        }
        save(formType) {
            console.log(formType)
        }
        edit() {
            console.log('hello')
        }
    }

    angular
        .module('paw_collective')
        .component('counter', {
            bindings: {
                count       : '=',
                data        : '=',
                category    : '=',
                file        : '=',
                formtype    : '='
            },
            templateUrl: 'components/form/form.html',
            controller: formCtrl
        })
})()
