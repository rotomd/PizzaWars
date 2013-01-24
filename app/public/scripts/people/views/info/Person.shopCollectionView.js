/*
*   view for a collection of shops in a person info view
*/

define([
    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'people/views/info/Person.shopItemView'
    
    ], 
    function(Backbone, _, mr, $, ShopItemView){
        
        var CollectionView = mr.CollectionView.extend({
            itemView: ShopItemView,
            tagName: 'ul'
        });
        
        return CollectionView;
        
    });