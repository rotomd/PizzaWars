/*
*   definition of router.
*   exposes the router object, not the constructor.
*/


define([
    'jquery',
	'backbone',
    'underscore',
    'views/IndexView',
    'views/RankingView',
    'collections/shopCollection'
], function( $, Backbone, _, IndexView, RankingView, shopCollection) {
    
    var contentArea = $('#content');

	var Router = Backbone.Router.extend({
        
		routes:{
			'': 'index',
            'ranking': 'ranking',
            'shops': 'shops'
		},
        
        
        /*
        *   routing functions
        */
        
        index: function(){
            contentArea.empty();
            new IndexView();            
        },
        
        ranking: function(){
            contentArea.empty();
            new RankingView({
                el: contentArea[0],
                collection: shopCollection
            });
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