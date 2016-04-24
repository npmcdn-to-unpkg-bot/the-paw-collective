'use strict';

(function() {

    function imageUploader($http, $q, Upload) {

        this.uploadImage = (file, cb) => {
        
            Upload.upload({
                url: 'api/image-uploads',
                data: {
                    file: file,
                    'username': 'user-animal'
                }
            }).then((resp) => {
                return $q.resolve(resp.data.url).then(cb)
            }, (resp) => {
                console.log('Error status: ' + resp.status)
            }, (evt) => {
                let progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
                this.exporting = true
            })
        }
    }

    angular.module('animalCollectiveApp.animals')
        .service('imageUploader', imageUploader)

})()
