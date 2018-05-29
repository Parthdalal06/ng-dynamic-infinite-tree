# ng-dynamic-infinite-tree : nth level nested tree with dynamic variables

# Installing

## NPM

```bash
    npm install ng-dynamic-infinite-tree
```

```html
    <link rel="stylesheet" type="text/css" href="node_modules/ng-dynamic-infinite-tree/style/style.css">
    <script src="node_modules/angular-ui-grid/ng-dynamic-infinite-tree.min.js">
```
# Angular Compatibility

ng-dynamic-infinite-tree is currently compatible with Angular versions ranging from 1.4.x to 1.7.x.

# Building

The first step is to install dependencies. `node` is required and must be available from the command line. If you don't have it, install node and ensure that the executable is in your path. 

The `gulp` command line utility is also required.

    # If you don't already have the grunt-cli installed:
    > npm install -g grunt-cli

With `git` and `grunt-cli` installed you simply run the following commands to install all dependencies. 

    > npm install
    > gulp build

The gulp build task will build files into `dist/`