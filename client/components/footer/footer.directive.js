'use strict';

angular.module('animalCollectiveApp')
    .directive('footerMain', function() {
        return {
            templateUrl: 'components/footer/footer.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('footer')
            }
        }
    })

    .directive('footerAdmin', function() {
        return {
            templateUrl: 'components/footer/footer-admin.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('footer')
            }
        }
    })
