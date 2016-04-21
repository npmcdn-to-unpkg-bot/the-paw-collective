'use strict';

angular.module('animalCollectiveApp.dashboard')
    .directive('adminDashboard', function($document) {
        return {
            restrict: 'EA',
            link: function(scope, elem, attrs) {

                let dropdownElem = angular.element(elem.parent().children()[2]),
                    isOpen = false;

                elem.bind('click', (e) => {

                    e.stopPropagation();
                    isOpen = true;

                    if (dropdownElem.hasClass('active')) {
                        dropdownElem.removeClass('active');
                    } else {
                        dropdownElem.addClass('active');
                    }
                });

                $document.bind('click', function() {
                    if (isOpen) {
                        dropdownElem.removeClass('active');
                    } else {
                        isOpen = false;
                    }
                })
            }
        };
    });
