'use strict';

angular.module('animalCollectiveApp')
    .directive('navbarAdmin', () => ({
        templateUrl: 'components/navbar-admin/navbar-admin.html',
        restrict: 'E',
        controller: 'NavbarAdminController',
        controllerAs: 'navadmin'
    }))

	.directive('adminDashboard', ($document) => {
	    return {
	        restrict: 'EA',
	        link: (scope, elem, attrs) => {

	            let dropdownElem = angular.element(elem.parent().children()[2]),
	                isOpen = false;

	            elem.bind('click', (e) => {

	                e.stopPropagation()
	                isOpen = true

	                if (dropdownElem.hasClass('active')) {
	                    dropdownElem.removeClass('active')
	                } else {
	                    dropdownElem.addClass('active')
	                }
	            })

	            $document.bind('click', () => {
	                if (isOpen) {
	                    dropdownElem.removeClass('active')
	                } else {
	                    isOpen = false
	                }
	            })
	        }
	    }
	})

	.directive('isotopeWidget', ($timeout) => {
		return {
			restrict: 'EA',
			link: (scope, elem, attrs) => {
			
				console.log('something here')
				
				$timeout(function () {
				    var iso = new Isotope(elem[0], {
				        itemSelector: '.grid-item',
				        layoutMode: 'masonry'
				     });
				},1000);
			}
		}
	})	

	.directive('circleMenu', () => {
	    return {
	        restrict: 'EA',
	        link: (scope, elem, attrs) => {

	        	// elem is the 'three circle svg'

				// menu is the 'edit/delete button' 
	            let menu = angular.element(elem.parent().children()[0])

				// When you hover over the three-circles, the three circles 
				// should fade out, and the 'edit/delete button' should fade-in
	            elem.bind('mouseenter', () => {

	                // fade out three circles
	                elem.addClass('fade-out')

	                // fade in 'edit/delete'
	                menu.addClass('fade-in')
	            })

	            menu.bind('mouseleave', () => {
	                elem.removeClass('fade-out')
	                menu.removeClass('fade-in')
	            })
	        }
	    }
	})
