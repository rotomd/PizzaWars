/*
*   definition of router.
*   exposes the router object, not the constructor.
*/


define([
    'jquery',
	'backbone',
    'underscore',
    'views/IndexView'
], function( $, Backbone, _, IndexView) {

	var Router = Backbone.Router.extend({
        
		routes:{
			'': 'index',
            'people': 'people',
            'shops': 'shops'
		},
        
        
        /*
        *   routing functions
        */
        
        index: function(){
            console.log('index route event');
            new IndexView();            
        },
        
        people: function(person){
            console.log('person route');
        },
        
        shops: function(shop){
            console.log('shop route');
        },
        
        
        //a function called post-initialization to get history handling in place
        startHistory: function(){
            Backbone.history.start({
                pushState: true
            });
        }        
	});
    
    return new Router();
});