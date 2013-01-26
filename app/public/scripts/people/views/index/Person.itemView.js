/*
*   view for a single person in the index view
*/

define([
    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'templates/people.index.itemView',
    'vent'
    ], 
    function(Backbone, _, mr, $, template, vent){
        
        var ItemView = mr.ItemView.extend({
            template:  template,
            tagName: 'tr',
            
            events: {
                'click': 'itemClick'            
            },
            
            itemClick: function(e){
                var id = this.model.id;                
                Backbone.history.navigate('/person/' + id);
                vent.trigger('click:index:person', this.model);
            }
        });
        
        return ItemView;
        
    });