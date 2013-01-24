/*
*   model for shop
*   exposes a constructor
*/

define(
    ['backbone', 'jquery', 'underscore'],
    function(Backbone, $, _){
        var ShopModel = Backbone.Model.extend({
            defaults: {
                name: 'unknown',
                address: ['no address provided'],
                phone: 'unknown',
                available: false,
                key: '',
                dateOrdered: null,
                score: 0
            },
            
            initialize: function(){
                console.log('made a shop model');
            }
        });
        
        return ShopModel;
    }
);