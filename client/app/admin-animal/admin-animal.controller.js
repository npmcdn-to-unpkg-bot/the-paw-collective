'use strict';
(function() {

    class AdminAnimalComponent {
        constructor($http, $q, Upload) {
            this.message = 'Hello'
            this.$http = $http
            this.$q = $q
            this.Upload = Upload
            this.queue = []

            // this.upload()
        }

        upload(animal) {
        	console.log('uploading....')

        	this.Upload.upload({
        		url: 'api/image-uploads',
        		data: {
        			file: this.file,
        			'username' : 'username-example'
        		}
        	}).then((resp) => {
        		console.log('The response is', resp.data.url)
        		animal.image = resp.data.url

				// Make a post with Data (animal)
        		let request = this.$http.post('/api/animal', animal)
				this.queue.push(request)

				console.log('Success' + resp.config.data.file.name + 'uploaded.  Response:' + resp.data)

				return this.$q.all(this.queue).then((result) => {
					console.log('the animal has been added')
				})

        	}, (resp) => {
        		console.log('Error status: ' + resp.status)
        	}, (evt) => {
        		let progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
        		console.log('progress: ' + progressPercentage + '% '  + evt.config.data.file.name)
        	})
        }


    }

    angular.module('animalCollectiveApp.animals')
        .controller('AdminAnimalComponent', AdminAnimalComponent)

})()
