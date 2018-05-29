angular.module("sptreecheck", ['dynamicsptreelib']).
controller("TreeController", ['$scope', function($scope) {
    $scope.treedata =[{
		"parent": "dataparent",
		"subchild": [{
			"leafname": "dataparent-subchild"
		}],
		"children": [{
			"childname": "children1",
			"subchild": [{
				"leafname": "children1-subchild"
			}, {
				"leafname": "children1-subchild2"
			}, {
				"leafname": "children1-subchild3"
			}],
			"children": [{
				"childname": "children1-subchildren",
				"subchild": [{
					"leafname": "children1-subchildrens-subchild"
				}]
			}]
		},{
			"childname": "children2",
			"subchild": [{
				"leafname": "children2-subchildren1"
			}, {
				"leafname": "children2-subchildren2"
			}, {
				"leafname": "children2-subchildren3"
			}],
			"children": [{
				"childname": "children2-subchildren",
				"subchild": [{
					"leafname": "children2-subchildrens-subchildren"
				}]
			}]
		}]
	}];
}])