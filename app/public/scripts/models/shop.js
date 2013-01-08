/*
*   model for shop
*/

define(
    ['backbone', 'jquery', 'underscore'],
    function(Backbone, $, _){
        var ShopModel = Backbone.Model.extend({
            urlRoot: '/shops'
        });
        
        return ShopModel;
    }
);