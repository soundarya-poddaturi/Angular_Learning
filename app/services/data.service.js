angular.module('myApp')
  .factory('DataService', function() {
    var data = ["AngularJS", "Component", "Routing", "Service"];
    return {
      getData: function() {
        return data;
      }
    };
  });
