'use strict';

(function() {

    function adminAnimalDataService($http, $q, Upload, imageUploader) {
        this.queue = []

        this.getAPI = (cb) => {
            $http.get('/api/animal').then(cb)
        }

        this.findAPI = (id, cb) => {
            $http.get(`/api/animal/${id}`).then(cb)
        }

        this.updateAPI = (animal, croppedUrl, file, cb) => {

            imageUploader.uploadImage(file, croppedUrl, (result) => {
                animal.image = result
                let request = $http.post('/api/animal', animal)
                this.queue.push(request)

                return $q.all(this.queue).then(cb)
            })
        }

        this.editAPI = (id, animal, imageFile, cb) => {
            let queue = []

            if (imageFile !== animal.data.image) {
                console.log('image does not match!!!')

                imageUploader.uploadImage(imageFile, (result) => {
                    animal.image = result
                    $http.put(`/api/animal/${id}`, animal)

                    return $q.resolve(result).then(cb)
                })

            } else {
                $http.put(`/api/animal/${id}`, animal)
                return $q.resolve(animal).then(cb)
            }
        }

        this.animals = [{
            text: 'Dog'
        }, {
            text: 'Cat'
        }, {
            text: 'Others'
        }];
    }

    angular.module('animalCollectiveApp.animals')
        .service('adminAnimalDataService', adminAnimalDataService)

})()