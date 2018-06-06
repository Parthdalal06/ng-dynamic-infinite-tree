# ng-dynamic-infinite-tree : nth level nested tree with dynamic variables

# Description
## Basic modules required :
1. Bootstrap
2. Jquery
3. AngularJs

## Basic tag to be used
```html
    <sptreeview treedata="treedata" parent="parent" children="children" subchild="subchild" childname="childname" leafname="leafname"></sptreeview>
```
## Mandatory values to be passed(for dynamic variables in the tree structure):
1. treedata="treedata" (data obtained)
2. parent="parent" 
3. children="children" 
4. subchild="subchild"
5. childname="childname"
6. leafname="leafname"
 
 
## JSON tree structure example:

```json
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
```

# Installing
## NPM

```bash
    npm install ng-dynamic-infinite-tree
```

```html
    <link rel="stylesheet" type="text/css" href="node_modules/ng-dynamic-infinite-tree/style/style.css">
    <script src="node_modules/ng-dynamic-infinite-tree/dist/ng-dynamic-infinite-tree.min.js">
```
# Angular Compatibility

ng-dynamic-infinite-tree is currently compatible with Angular versions ranging from 1.4.x to 1.7.x.

# Building

The first step is to install dependencies. `node` is required and must be available from the command line. If you don't have it, install node and ensure that the executable is in your path. 

The `gulp` command line utility is also required.

    # If you don't already have the gulp installed:
    > npm install -g gulp

With `npm` and `gulp` installed you simply run the following commands to install all dependencies. 

    > npm install
    > gulp build

The gulp build task will build files into `dist/`
