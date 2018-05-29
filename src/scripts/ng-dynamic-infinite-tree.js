(function(angular) {
  'use strict';
  angular.module("dynamicsptreelib", []).
  directive('sptreeview', function() {
	    return {
	      restrict: 'E',
	      scope: {
	        tree: '=treedata',
	        parent:'@',
	        children:'@',
	        childname:'@',
	        subchild:'@',
	        leafname:'@'

	      },
	      templateUrl: '../template/sp-tree-template.html',
	      link: function($scope, element, attrs) {
	           	$scope.collapse=function(data){
	data.expanded=false;
		};
			$scope.expand=function(data){
	data.expanded=true;
		};
		}
	    };
  });
})(window.angular);