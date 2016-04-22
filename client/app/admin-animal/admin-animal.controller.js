'use strict';
(function() {

    class AdminAnimalComponent {
        constructor($http, $q, Upload, $scope, $timeout) {
            this.$http = $http
            this.$q = $q
            this.$timeout = $timeout
            this.$scope = $scope
            this.Upload = Upload
            this.queue = []
            this.animal = {}

            // List of Animal Categories
            this.categories = ['Dog', 'Cat', 'Others']

            // Set the default category choice
            this.category = 0

            $timeout(function(){
                $scope.adminAnimal.file = 'https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e35/12940760_494141767441868_1553541100_n.jpg'
            },3000)
        }

        upload(animal) {

            if (!this.file) {
                alert('You need to upload an image')
                return
            }

            this.Upload.upload({
                url: 'api/image-uploads',
                data: {
                    file: this.file,
                    'username': 'username-example'
                }
            }).then((resp) => {
                console.log('The response is', resp.data.url)
                animal.image = resp.data.url

                // Make a post with Data (animal)
                let request = this.$http.post('/api/animal', animal)
                this.queue.push(request)

                console.log('Success' + resp.config.data.file.name + 'uploaded.  Response:' + resp.data)
                this.indicatorStatus = 'Animal has successfully added!'
                this.animal = {}

                return this.$q.all(this.queue).then((result) => {
                    console.log('the animal has been added')
                })

            }, (resp) => {
                console.log('Error status: ' + resp.status)
            }, (evt) => {
                let progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name)

                this.indicatorStatus = progressPercentage + '% ' + evt.config.data.file.name
                this.exporting = true;
            })
        }


    }

    angular.module('animalCollectiveApp.animals')
        .controller('AdminAnimalComponent', AdminAnimalComponent)

})()
