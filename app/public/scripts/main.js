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
], function(IndexView, Workspace, Backbone, $){
    $(document).ready(function(){
        // Initialize routing and start Backbone.history()
        new Workspace();
    	Backbone.history.start();
        
        // Initialize the Index view
        new IndexView();    
    });
});