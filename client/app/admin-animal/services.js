'use strict';

angular.module('animalCollectiveApp.animals')
    .service('adminAnimalDataService', function($http, $q, Upload) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.queue = []

        this.getAPI = (cb) => {
            $http.get('/api/animal').then(cb)
        }

        this.findAPI = (id, cb) => {
        	$http.get('/api/animal/' + id + '').then(cb)
        }

        this.updateAPI = (animal, file, cb) => {

            Upload.upload({
                url: 'api/image-uploads',
                data: {
                    file: file,
                    'username': 'user-animal'
                }
            }).then((resp) => {
                console.log('The response is', resp.data.url)
                animal.image = resp.data.url

                // Make a post with data (Animal)
                let request = $http.post('/api/animal', animal)
                this.queue.push(request)

                return $q.all(this.queue).then(cb)

            }, (resp) => {
                console.log('Error status: ' + resp.status)
            }, (evt) => {
                let progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
                this.exporting = true
            })

        }

        this.editAPI = (animal) => {
            let queue = []
            let request = $http.post('/api/animals/' + animal._id + '', animal)

            queue.push(request)

            return $q.all(queue).then((result) => {
                console.log('the animal has been updated!')
            })
        }
    });
