'use strict';

angular.module('scrollingMetrics.services')

    .factory('myAPI', function ($resource) {
        return $resource('myAPIUrl');
    });
