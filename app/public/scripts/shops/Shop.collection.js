/*
*   collection for shops
*   exposes constructor
*/

define(
    ['backbone', 'jquery', 'underscore', 'shops/Shop.model'],
    function(Backbone, $, _, ShopModel){
        var ShopCollection = Backbone.Collection.extend({
            
            url: '/api/shops',
            
            model: ShopModel,
            
            initialize: function(){
                console.log('getting shops');
                
                
            }
        });
        
        return ShopCollection;
    }
);