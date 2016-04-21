'use strict';

angular.module('animalCollectiveApp.dashboard')
    .directive('adminDashboard', ($document) => {
        return {
            restrict: 'EA',
            link: (scope, elem, attrs) => {

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

                $document.bind('click', () => {
                    if (isOpen) {
                        dropdownElem.removeClass('active');
                    } else {
                        isOpen = false;
                    }
                })
            }
        };
    })

.directive('circleMenu', () => {
    return {
        restrict: 'EA',
        link: (scope, elem, attrs) => {

            let menu = angular.element(elem.parent().children()[0]);

            elem.bind('mouseenter', () => {

                // Slide Out Button
                elem.addClass('fade-out');

                // Slide In Menu
                menu.addClass('fade-in');
            })

            menu.bind('mouseleave', () => {
                elem.removeClass('fade-out');
                menu.removeClass('fade-in');
            });

        }
    }
})
