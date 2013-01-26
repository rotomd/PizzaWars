/*
*   view for logout area
*/

define([
        'backbone',
        'marionette',
        'templates/logout'
    ],
    function(Backbone, mr, template){
        return mr.ItemView.extend({
            template: template,
            events: {
                'click input[type="button"]': 'logoutClick'
            },
            
            logoutClick: function(event){
                event.preventDefault();
                this.trigger('logoutClick');
            }
        });
    });