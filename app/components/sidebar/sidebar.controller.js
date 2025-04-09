angular.module('myApp')
  .controller('SidebarController', function($scope) {
    $scope.items = ['Home', 'Profile', 'Settings', 'Logout'];
  });
