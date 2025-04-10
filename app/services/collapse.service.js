// app/services/collapse.service.js
angular.module('myApp')
  .service('CollapseService', function() {
      this.isCollapsed = false;
    
      this.toggle = function() {
        console.log('Sidebar collapsed:', this.isCollapsed);
        this.isCollapsed = !this.isCollapsed;
      };
    });
  