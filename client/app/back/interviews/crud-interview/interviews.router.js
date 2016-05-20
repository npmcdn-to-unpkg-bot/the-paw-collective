'use strict'

angular.module('paw_collective.animals')
    .config(function config($routeProvider) {
        $routeProvider
            .when('/admin-interviews/create-interview', {
                templateUrl: 'app/back/interviews/crud-interview/interviews.html',
                controller: 'adminInterviewComponent',
                controllerAs: 'adminInterview',
                authenticate: 'admin',
                resolve : {
                    formType: () => {
                        return {
                            title: 'Create',
                            isInterview: true
                        }
                    }
                }
            })

            .when('/admin-interviews/edit-interview/:id', {
				templateUrl: 'app/back/interviews/crud-interview/interviews.html',
				controller: 'adminInterviewComponent',
				controllerAs: 'adminInterview',
				authenticate: 'admin',
                resolve : {
                    formType: () => {
                        return {
                            title: 'Edit',
                            isInterview: true
                        }
                    }
                }
            })
    })
