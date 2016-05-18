'use strict';

(function() {

    /**
     * The Util Filter is for thin, globally reusable, utility functions
     */
    function slugify() {
        return function(input) {
            if (input) {
                return input.toLowerCase().replace(/[^a-z_]/g, '-');
            }
        }
    }

    angular.module('paw_collective.util')
        .filter('slugify', slugify)
})()
