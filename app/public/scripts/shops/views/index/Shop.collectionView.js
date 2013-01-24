/*
*   view for a collection of shops in the index
*/

define([
    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'shops/views/index/Shop.itemView'
    
    ], 
    function(Backbone, _, mr, $, ShopItemView){
        
        var CollectionView = mr.CollectionView.extend({
            itemView: ShopItemView,
            tagName: 'table'
        });
        
        return CollectionView;
        
    });