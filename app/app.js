'use strict';

angular.module('scrollingMetrics.controllers', []);
angular.module('scrollingMetrics.services', []);
angular.module('scrollingMetrics.directives', []);

angular.module('scrollingMetrics', [
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'scrollingMetrics.controllers',
  'scrollingMetrics.services',
  'scrollingMetrics.directives'
]);

angular.module('scrollingMetrics').config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/home');

  $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
          });
})

.run(function() {

});
