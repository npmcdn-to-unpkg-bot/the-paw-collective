'use strict';

(function() {

/**
 * The Util Directive is for thin, globally reusable, utility functions
 */
function imagePlaceholder() {
 	return {
 		restrict: 'EA',
 		link: (scope, elem, attrs) => {
			
 		}
 	}
}

angular.module('animalCollectiveApp.util')
  .directive('imagePlaceholder', imagePlaceholder)
})()
