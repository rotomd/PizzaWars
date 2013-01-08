/*
    main/first executed client side script.
*/


//configure require.js
// simplify requiring the common libraries.
require.config({
    shim: {
        'underscore': {
    		exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
    },
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        datatables: 'lib/datatables',
        highcharts: 'lib/highcharts/js/highcharts'
    }
});



require([
  // load the initialization function
  'views/index', 'routers/router', 'backbone', 'jquery'
], function(IndexView, workspace, Backbone, $){
    
    //from here on we're manipulating the dom,
    // so exec on doc.ready.
    $(document).ready(function(){
        // Initialize routing and start Backbone.history()
        //new Workspace();
        workspace.initialize();
        
    	Backbone.history.start({
            pushState: true
            
            //this handy option makes it so that the current route is not rendered
            //(because it already has been rendered by the server.)
            //silent: true
        });
        
        // Initialize the Index view
        //new IndexView();    
    });
});