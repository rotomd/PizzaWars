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
        
        //rather than create the clutter of a model and collection for this tiny use case, 
        // i've defined ShopModel and ShopCollection here.
        var ShopModel = Backbone.Model.extend({});        
        var ShopCollection = Backbone.Collection.extend({});
        
        var CollectionView = mr.CollectionView.extend({
            itemView: ShopItemView,
            tagName: 'ul',
            
            initialize: function(options){
                //it should really be a shop collection constructed from the array of rankings passed in.
                this.collection = new ShopCollection([new ShopModel({name: 'tom'})]);                
            }
        });
        
        return CollectionView;
        
    });