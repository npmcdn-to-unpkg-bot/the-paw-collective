'use strict';

angular.module('paw_collective')
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
	
	.directive('circleMenu', () => {
	    return {
	    	template: `
			<svg class="three-dots" width="31px" height="7px" viewBox="0 0 31 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <g id="Dashboard" sketch:type="MSArtboardGroup" transform="translate(-1321.000000, -433.000000)" fill="#CACACA">
                        <g id="List" sketch:type="MSLayerGroup" transform="translate(87.000000, 309.000000)">
                            <g id="Group" transform="translate(0.000000, 88.000000)" sketch:type="MSShapeGroup">
                                <g id="three-dots">
                                    <g transform="translate(1234.000000, 36.000000)">
                                        <ellipse id="Oval-2" cx="27.7211538" cy="3.5" rx="3.27884615" ry="3.5"></ellipse>
                                        <ellipse id="Oval-2" cx="15.2019231" cy="3.5" rx="3.27884615" ry="3.5"></ellipse>
                                        <ellipse id="Oval-2" cx="3.27884615" cy="3.5" rx="3.27884615" ry="3.5"></ellipse>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
	    	`,
	        restrict: 'EA',
	        replace: true,
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
