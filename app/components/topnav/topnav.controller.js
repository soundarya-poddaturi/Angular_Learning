angular.module('myApp')
    .controller('TopNavController', function($scope, CollapseService) {
    $scope.service = CollapseService;
  
    $scope.toggleSidebar = function() {
      CollapseService.toggle();
    };
    $scope.showModal = false;

    $scope.openModal = function() {
      console.log("openmodal")
      $scope.showModal = true;
    };

    $scope.closeModal = function() {
      console.log("openmwedfodal")
      $scope.showModal = false;
    };
  });
  
  