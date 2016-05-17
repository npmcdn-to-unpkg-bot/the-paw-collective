'use strict';

angular.module('animalCollectiveApp')
    .directive('navbar', () => ({
        templateUrl: 'components/navbar/navbar.html',
        restrict: 'E',
        controller: 'NavbarController',
        controllerAs: 'nav'
    }))

    .directive('mobileMenu', ($document) => {
	    return {
	        restrict: 'EA',
	        link: (scope, elem, attrs) => {

	        	let menuIcon 	= angular.element(elem.children()[0])
	        	let menuList 	= angular.element(elem.children()[1])
	        	let body 		= angular.element($document[0].body)

	        	menuIcon.bind('click', () => {
	        		menuIcon.toggleClass('on')
	        		menuList.toggleClass('on')
	        		body.toggleClass('no-scroll')
	        	})

	            // let dropdownElem = angular.element(elem.parent().children()[2]),
	            //     isOpen = false;

	            // elem.bind('click', (e) => {

	            //     e.stopPropagation()
	            //     isOpen = true

	            //     if (dropdownElem.hasClass('active')) {
	            //         dropdownElem.removeClass('active')
	            //     } else {
	            //         dropdownElem.addClass('active')
	            //     }
	            // })

	            // $document.bind('click', () => {
	            //     if (isOpen) {
	            //         dropdownElem.removeClass('active')
	            //     } else {
	            //         isOpen = false
	            //     }
	            // })
	        }
	    }
	})
	
