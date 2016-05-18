'use strict';

angular.module('paw_collective')
    .directive('footerMain', function() {
        return {
            templateUrl: 'components/footer/footer.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('footer_main')
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
