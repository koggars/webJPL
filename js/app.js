var webJPLApp = angular.module('webJPLApp', ['ngRoute','ngCookies','webJPLControllers']);
var webJPLControllers = angular.module('webJPLControllers', []);

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
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'WebJPLHome'
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'WebJPLAbout'
      }).
      when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'WebJPLLogout'
      }).
      when('/problems', {
        templateUrl: 'views/problems.html',
        controller: 'WebJPLProblems'
      }).
      when('/code', {
        templateUrl: 'views/code.html',
        controller: 'WebJPLCode'
      }).
      otherwise({
        redirectTo: '/'
      })
  });