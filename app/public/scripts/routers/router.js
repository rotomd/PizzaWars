define([
    'jquery',
	'backbone',
    'views/shops',
    'views/participants',
    'collections/shops'
], function( $, Backbone, ShopsView, ParticipantsView, ShopCollection ) {

	var Workspace = Backbone.Router.extend({
        
		routes:{
			'': 'index',
            'people': 'people',
            'shops': 'shops'
		},
        
        /*index: function(){
            console.log('index route');
            
        },
        
        people: function(person){
            console.log('person route');
        },
        
        shops: function(shop){
            console.log('shop route');
        }*/
        
        
	});
    
    function initialize(){
        var workspace = new Workspace();
        
        workspace.on('route:index', function(){
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
            
            //var shopsView = new ShopsView();
            
            //shopsView.render();
        });
        
        workspace.on('route:shops', function(){
            console.log('shops route');
        });
    }

	return {
        initialize: initialize   
	}
});