'use strict';

angular.module('animalCollectiveApp.animals')
    .service('adminAnimalDataService', function($http, $q, Upload) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.queue = []

        this.getAPI = (cb) => {
            $http.get('/api/animal').then(cb)
        }

        this.findAPI = (id, cb) => {
            $http.get(`/api/animal/${id}`).then(cb)
        }

        // Upload Image Module
        this.uploadImage = (file, cb) => {
            // Upload Image Here
            console.log('the image trying to upoad', file)

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

        this.updateAPI = (animal, file, cb) => {

            // Make a post with data (Animal)
            this.uploadImage(file, (result) => {
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

                this.uploadImage(imageFile, (result) => {
                    animal.image = result
                    $http.put(`/api/animal/${id}`, animal)
                })

            } else {
                $http.put(`/api/animal/${id}`, animal)
            }
        }

        this.animals = [{
            text: 'Dog'
        }, {
            text: 'Cat'
        }, {
            text: 'Others'
        }];
    });
