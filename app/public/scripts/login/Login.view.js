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
            initialize: function(){
                //console.log('initing login view');
                //console.log(this.el)
            },
            events: {
                'click input[type="button"]': 'loginClick' 
            },
            
            loginClick: function(event){
                event.preventDefault();
                
                console.log('login click');
                
                $.ajax({
                    type: 'post',
                    data: {
                        username: this.$('#login-username').val(),
                        password: this.$('#login-password').val()
                    },
                    url: 'api/login',
                    success: function(result){
                        if(result.authorized){
                            vent.trigger('authorized', result);
                        }
                    }
                });
            }
        });
    });