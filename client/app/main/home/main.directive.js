'use strict';

(function() {

    function isotopeWidget($timeout) {
        return {
            restrict: 'EA',
            link: (scope, elem, attrs) => {           
                $timeout(function () {
                    var iso = new Isotope(elem[0], {
                        itemSelector: '.main_grid-item',
                        layoutMode: 'masonry'
                     });
                },100);
            }
        }
    }
    
    angular.module('animalCollectiveApp')
        .directive('isotopeWidget', isotopeWidget)
})()
