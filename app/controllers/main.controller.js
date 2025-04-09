angular.module('myApp')
  .controller('MainController', function($scope, DataService) {
    $scope.message = "Welcome to the AngularJS App!";
    $scope.data = DataService.getData();
  });
