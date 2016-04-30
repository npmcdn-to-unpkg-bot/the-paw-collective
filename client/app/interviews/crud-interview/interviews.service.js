'use strict';

(function() {

    function InterviewDataService($http, $q, Upload, imageUploader) {
        
        // Gets a list of Interviews
        this.index = (cb) => {
            $http.get('/api/interview').then(cb)
        }

        // Gets a single Interview from the DB
        this.show = (id, cb) => {
            $http.get(`/api/interview/${id}`).then(cb)
        }

        // Uploads the images to Cloudinary
        this.upload = (data, photos, articles, cb) => {

            let imageArray  = {},
                interview   = {},
                promise     = []

            /*
                Loop through each photo
                Set a promise for each photo and wait until the response from Cloudinary
             */
            
            angular.forEach(photos, (value, key) => {

                let deferred = $q.defer()
                promise.push(deferred.promise)
                imageUploader.uploadImage(value, (result) => {

                    imageArray[key] = result
                    deferred.resolve()
                })
            })

            $q.all(promise).then(() => {

                interview = {
                    title: data.title,
                    owner: data.ownerName,
                    animal: data.animal,
                    images: imageArray,
                    article: articles,
                    active: true
                }

                $http.post('/api/interview', interview).then(cb)
            })
        }
    }

    angular.module('animalCollectiveApp.interview')
        .service('InterviewDataService', InterviewDataService)
})()
