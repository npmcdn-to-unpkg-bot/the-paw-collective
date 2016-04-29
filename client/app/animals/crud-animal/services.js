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

            imageUploader.uploadImage(croppedUrl, (result) => {
                animal.image = result
                let request = $http.post('/api/animal', animal)
                this.queue.push(request)

                return $q.all(this.queue).then(cb)
            })
        }

        this.updateInterviewAPI = (something, images, articles, cb) => {

            let imageArray = {}
            var promise = []

            angular.forEach(images, function(value, key) {

                var deferred = $q.defer()
                promise.push(deferred.promise)
                imageUploader.uploadImage(value, (result) => {

                    imageArray[key] = result
                    deferred.resolve()
                })
            })

            $q.all(promise).then(function() {

                console.log('all resolved')
                console.log(imageArray)

                // When everything is resolved, then one should make a post
                let interview = {
                    title: something.title,
                    owner: something.ownerName,
                    animal: something.animal,
                    images: imageArray,
                    article: articles,
                    active: true
                }

                $http.post('/api/interview', interview)

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
