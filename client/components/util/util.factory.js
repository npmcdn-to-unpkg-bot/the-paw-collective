(function() {
    angular
        .module('paw_collective.util')
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('theInterceptor')
        }])

    .factory('theInterceptor', theInterceptor)

    theInterceptor.$inject = ['$rootScope', '$q', '$timeout']

    function theInterceptor($rootScope, $q, $timeout) {
        return {
            request: onRequest,
            response: onResponse,
            responseError: onResponseError
        }

        function onResponseError(response) {
            if (response.config && response.config.defer) {
                response.config.defer.reject()
            }

            return $q.reject(response)
        }

        function onResponse(response) {
            if (response.config && response.config.defer) {
                response.config.defer.resolve()
            }

            return $q.when(response)
        }

        function onRequest(config) {
            // filter for specific URLs only
            registerPromise(config)
            return $q.when(config)
        }

        function registerPromise(config) {

            var defer = $q.defer()
            $rootScope.activePromises.push(defer.promise)
            config.defer = defer
            // once the promise is fulfilled we remove it from the activePromises array
            defer.promise.finally(function() {
                angular.forEach($rootScope.activePromises, function(promise, index) {
                    if (promise === defer.promise) {
                        $rootScope.activePromises.splice(index, 1)
                    }
                })
            })
        }
    }
})()