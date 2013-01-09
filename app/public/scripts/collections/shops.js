/*
*   collection for shops
*/

define(
    ['backbone', 'jquery', 'underscore', 'models/shop'],
    function(Backbone, $, _, ShopModel){
        var ShopCollection = Backbone.Model.extend({
            
            url: '/api/shops',
            
            model: ShopModel,
            
            initialize: function(){
                console.log('getting shops');
                this.fetch();
                
                this.on('reset', function() {
                    console.log('shop collection reset');
                });
                
            }
        });
        
        return ShopCollection;
    }
);