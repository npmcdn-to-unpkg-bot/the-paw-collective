'use strict';
(function() {

    class AdminAnimalComponent {
        constructor(Upload) {
            this.message = 'Hello';
            this.Upload = Upload;
        }
    }

    angular.module('animalCollectiveApp.animals')
        .controller('AdminAnimalComponent', AdminAnimalComponent);

})();
