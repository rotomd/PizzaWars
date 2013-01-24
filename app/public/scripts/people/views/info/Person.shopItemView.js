/*
*   view for a single shop in a person's info page
*/

define([
    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'templates/people.info.shopItemView'
    
    ], 
    function(Backbone, _, mr, $, template){
        
        var ItemView = mr.ItemView.extend({
            template:  template,
            tagName: 'li'
        });
        
        return ItemView;
        
    });