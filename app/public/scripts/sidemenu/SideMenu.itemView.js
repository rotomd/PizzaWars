/*
*   view for a single side menu item
*/

define([    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'vent'
    ], 
    function(Backbone, _, mr, $, vent){
        
        var ItemView = mr.ItemView.extend({

            tagName: 'li',
            
            events: {
                'click': 'itemClick'            
            },
            
            itemClick: function(e){
                //var id = this.model.id;                
                //Backbone.history.navigate('/person/' + id);
                //vent.trigger('click:index:person', this.model);
                console.log('clicked');
            }
        });
        
        return ItemView;
        
    });