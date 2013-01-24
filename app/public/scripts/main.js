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
        highcharts: 'lib/highcharts/js/highcharts',
        marionette: 'lib/backbone.marionette',
        'backbone.wreqr': 'lib/backbone.wreqr',
        'backbone.babysitter': 'lib/backbone.babysitter'
    }
});

define([
    'backbone',
    'app',
    'Router',
    'Controller'
    ], 
    function(Backbone, app, Router, Controller){
    
        app.start();
        
        new Router({
            controller: new Controller()
        });
        
        Backbone.history.start({pushState: true});
        
    });