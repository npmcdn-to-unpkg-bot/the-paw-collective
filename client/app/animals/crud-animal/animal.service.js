'use strict';

(function() {

    function AnimalDataService($http, $q, Upload, imageUploader) {
        this.queue = []

        this.index = (cb) => {
            $http.get('/api/animal').then(cb)
        }

        this.show = (id, cb) => {
            $http.get(`/api/animal/${id}`).then(cb)
        }

        this.upload = (animal, croppedUrl, file, cb) => {

            imageUploader.uploadImage(croppedUrl, (result) => {
                animal.image = result
                
                let request = $http.post('/api/animal', animal)
                this.queue.push(request)

                return $q.all(this.queue).then(cb)
            })
        }

        this.edit = (id, animal, imageFile, cb) => {

            let queue = []

            if (imageFile !== animal.data.image) {

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
        .service('AnimalDataService', AnimalDataService)
})()
