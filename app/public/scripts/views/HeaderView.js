/*
*   view for the header
*/

define([
    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'vent'
    
    ], 
    function(Backbone, _, mr, $, vent){
        
        return mr.ItemView.extend({            
            el: '#header',
            
            events: {
                'click a': 'headerClick'
            },
            
            headerClick: function(e){
                e.preventDefault();              
                Backbone.history.navigate('/', {trigger:true});
            }
        });
                
    });