angular.module('myApp')
  .directive('sidebar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: 'SidebarController'
    };
  });
