define([
    'jquery',
	'backbone'
], function( $, Backbone ) {

	var Workspace = Backbone.Router.extend({
        
		routes:{
			'': 'index',
            'people': 'people',
            'shops': 'shops'
		},
        
        index: function(){
            console.log('index route');
            
        },
        
        people: function(person){
            console.log('person route');
        },
        
        shops: function(shop){
            console.log('shop route');
        }
        
        
	});
    
    function initialize(){
        var workspace = new Workspace();
        
        workspace.on('route:index', function(){
            console.log('index route event');
        });
        
        workspace.on('route:shops', function(){
            console.log('shops route');
        });
    }

	return {
        initialize: initialize   
	}
});