angular.module('myApp')
  .controller('MainController', function($scope, DataService,CollapseService) {
    $scope.message = "Welcome to the AngularJS App!";
    $scope.data = DataService.getData();
    $scope.service = CollapseService;
  });
