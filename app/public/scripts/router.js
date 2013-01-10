/*
*   definition of router.
*   exposes the router object, not the constructor.
*/


define([
    'jquery',
	'backbone',
    'views/shops',
    'views/participants',
    'collections/shops'
], function( $, Backbone, ShopsView, ParticipantsView, ShopCollection ) {

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
            
            var shops = new ShopCollection();
            
            $.when( shops.fetch() ).done( function(data){
                var shopsView = new ShopsView({collection: shops});
                
                shopsView.render()
                    .$el
                        .appendTo('#content')
                        .find('table')
                            .dataTable();
            });            
        },
        
        people: function(person){
            console.log('person route');
        },
        
        shops: function(shop){
            console.log('shop route');
        },
        
        
        //a function called post-initialization to get history handling in place
        startHistory: function(){
            Backbone.history.start();
        }        
	});
    
    return new Router();
});