var webJPLApp = angular.module('webJPLApp', ['ngRoute','ngCookies','webJPLControllers']);

webJPLApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

webJPLApp.config(
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/login.html',
        controller: 'WebJPLLogin'
      }).
      when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'WebJPLLogout'
      }).
      when('/problems', {
        templateUrl: 'views/problems.html',
        controller: 'WebJPLProblems'
      }).
      otherwise({
        redirectTo: '/'
      })
  });