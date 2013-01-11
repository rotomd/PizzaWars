/*
*   index view
*   returns constructor
*/

define(
    ['backbone', 'jquery', 'underscore', 'collections/shopCollection', 'collections/personCollection',
        'views/ShopsView', 'views/PeopleView'
    ],     
    function(Backbone, $, _, shopCollection, personCollection, ShopsView, PeopleView){
        var IndexView = Backbone.View.extend({
           
            //the element for this view
            el: '#content',
           
           
            initialize: function(){                
                console.log('index view init');
                var that = this;
                
                var $shopTable = $( document.createElement('table') ),
                    $peopleTable = $( document.createElement('table') ); 
                    
                that.$el.html( $shopTable ).append($peopleTable );
                
                that.personCollection = personCollection;
                that.shopCollection = shopCollection;
                
                that.shopsView = new ShopsView( { 
                    collection: that.shopCollection,
                    el: $shopTable[0]
                } );
                
                that.peopleView = new PeopleView( { 
                    collection: that.personCollection,
                    el: $peopleTable[0]
                } );
                
                personCollection.fetch({
                    success: function(collection, response, options){
                        personCollection.trigger('reset');
                    }
                });
                shopCollection.fetch({
                    success: function(collection, response, options){
                        shopCollection.trigger('reset');
                    }
                });
           
            }           
        });
        
        return IndexView;
    }
);