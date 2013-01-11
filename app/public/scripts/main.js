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
  'router', 'views/SideMenuView'
], function(router, SideMenuView){
    
    //from here on we're manipulating the dom,
    // so exec on doc.ready.
    $(document).ready(function(){
        
        var sideMenu = new SideMenuView();          
        router.startHistory();
        
    });
});