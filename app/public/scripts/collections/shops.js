/*
*   collection for shops
*/

define(
    ['backbone', 'jquery', 'underscore', 'models/shop'],
    function(Backbone, $, _, ShopModel){
        var ShopCollection = Backbone.Model.extend({
            model: ShopModel,
            
            initialize: function(){
                this.fetch();
            }
        });
        
        return ShopCollection;
    }
);