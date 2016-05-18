'use strict';

angular.module('paw_collective')
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

	        	// // Prevent Memory Leak
	        	// scope.$on('destroy', () => {
	        	// 	menuIcon.unbind('click')
	        	// })
	        }
	    }
	})
	
