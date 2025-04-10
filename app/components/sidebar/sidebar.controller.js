angular.module('myApp')
  .controller('SidebarController', function($scope, CollapseService, $location) {
  $scope.service = CollapseService;

  $scope.toggle = function() {
    CollapseService.toggle();
  };

  $scope.currentPath = $location.path();

  $scope.items = [
    { name: 'Home', path: '/', icon: 'fa fa-home' },
    { name: 'Profile', path: '/profile', icon: 'fa fa-user' },
    { name: 'Settings', path: '/settings', icon: 'fa fa-cog' }
  ];
});
