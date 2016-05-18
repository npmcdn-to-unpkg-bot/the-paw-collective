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

        this.showByTitle = (title, cb) => {
            $http.get(`/api/interview/${title}`).then(cb)
        }

        this.edit = (id, data, articles, photos, cb) => {

            if (photos) {

                let imageArray = {},
                    interview = {},
                    promise = []

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

                    // Check to see if owner image does not exists
                    if (!imageArray.owner) {
                        console.log('owner picutre not there?')
                        imageArray.owner = data.images[0].owner
                    }

                    if (!imageArray.animal) {
                        console.log('animal picutre is not there?')
                        imageArray.animal = data.images[0].animal
                        imageArray.animal_thumbnail = data.images[0].animal_thumbnail
                    }

                    interview = {
                        title: data.name,
                        owner: data.ownerName,
                        excerpt: data.excerpt,
                        animal: data.animal,
                        images: [imageArray],
                        article: articles,
                        active: true
                    }

                    console.log('INTERVIEW', interview)
                    console.log('the id is', id)

                    $http.put(`/api/interview/${id}`, interview).then(cb)
                })


            } else {

                let interview = {
                    title: data.name,
                    owner: data.ownerName,
                    excerpt: data.excerpt,
                    animal: data.animal,
                    article: articles,
                    active: true,
                }

                $http.put(`/api/interview/${id}`, interview).then(cb)
            }


        }

        // Uploads the images to Cloudinary
        this.upload = (id, data, articles, photos, cb) => {

            let imageArray = {},
                interview = {},
                promise = []

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
                    title: data.name,
                    owner: data.ownerName,
                    excerpt: data.excerpt,
                    animal: data.animal,
                    images: imageArray,
                    article: articles,
                    active: true
                }

                $http.post('/api/interview', interview).then(cb)
            })
        }
    }

    angular.module('paw_collective.interview')
        .service('InterviewDataService', InterviewDataService)
})()
