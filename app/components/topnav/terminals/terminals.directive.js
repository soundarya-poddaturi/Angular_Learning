angular.module('myApp')

.directive('terminal', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/topnav/terminal.html',
      controller: 'TerminalController'
    };
  });
  