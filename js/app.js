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
      when('/help', {
        templateUrl: 'views/help/helpIndex.html',
        controller: 'WebJPLHelpIndex'
      }).
      when('/help/tutorials', {
        templateUrl: 'views/help/helpTut.html',
        controller: 'WebJPLHelpTut'
      }).
      when('/help/videos', {
        templateUrl: 'views/help/helpVideo.html',
        controller: 'WebJPLHelpVideos'
      }).
      when('/help/examples', {
        templateUrl: 'views/help/helpExamples.html',
        controller: 'WebJPLHelpExamples'
      }).
      when('/help/solutions', {
        templateUrl: 'views/help/helpSol.html',
        controller: 'WebJPLHelpSol'
      }).
      otherwise({
        redirectTo: '/'
      })
  });