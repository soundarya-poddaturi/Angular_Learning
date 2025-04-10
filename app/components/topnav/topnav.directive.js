angular.module('myApp')

.directive('topnav', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/topnav/topnav.html',
      controller: 'TopNavController'
    };
  });
  