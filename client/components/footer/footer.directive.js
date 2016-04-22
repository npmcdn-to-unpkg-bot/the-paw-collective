'use strict';

angular.module('animalCollectiveApp')
    .directive('footer', function() {
        return {
            templateUrl: 'components/footer/footer.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('footer')
            }
        }
    })
