angular.module('myApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
