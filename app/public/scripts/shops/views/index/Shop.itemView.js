/*
*   view for a single shop in the index view
*/

define([
    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'templates/shops.index.itemView'
    
    ], 
    function(Backbone, _, mr, $, template){
        
        var ItemView = mr.ItemView.extend({
            template:  template,
            tagName: 'tr'
        });
        
        return ItemView;
        
    });