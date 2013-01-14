/*
*   collection for shops
*   initializes and exposes the shopCollection.
*/

define(
    ['backbone', 'jquery', 'underscore', 'models/ShopModel'],
    function(Backbone, $, _, ShopModel){
        var ShopCollection = Backbone.Collection.extend({
            
            url: '/api/shops',
            
            model: ShopModel,
            
            initialize: function(){
                console.log('getting shops');
                //this.fetch();
                
                //this.on('all', function(eventName) {
                //    console.log('shop collection event: ' + eventName);
                //});
                
            }
        });
        
        return new ShopCollection();
    }
);