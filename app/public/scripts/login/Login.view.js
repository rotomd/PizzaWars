/*
*   view for login area
*/

define([
        'backbone',
        'marionette',
        'templates/login',
        'vent'
    ],
    function(Backbone, mr, template, vent){
        return mr.ItemView.extend({
            template: template,
         
            events: {
                'click input[type="button"]': 'loginClick' 
            },
            
            loginClick: function(event){
                event.preventDefault();
                
                var authInfo = {
                    username: this.$('#login-username').val(),
                    password: this.$('#login-password').val()
                };
                
                this.trigger('click:login', authInfo);                
            }
        });
    });