/*
*   controller for login/logout functionality
*/

define([
    'backbone',
    'marionette',
    'underscore',
    'jquery',
    'app',
    'vent',
    
    //logout stuff
    'login/Logout.view',
    
    //login stuff
    'login/Login.view'
    
    ],
    
    function(bb, mr, _, $, app, vent, LogoutView, LoginView){
        var Controller = mr.Controller.extend({
            
            initialize: function(){
                vent.on('authorized', this.showLogoutView);
            },
            
            configureAuthorization: function(){
                var that = this;
                $.ajax({
                    url: 'api/authorized',
                    type: 'get',
                    success: function(result){
                        if(result.authorized){
                            that.showLogoutView(result);
                        } else {
                            that.showLoginView(result);
                        }
                    }
                });
            },
            
            showLogoutView: function(authInfo){
                var logoutView = new LogoutView();
                app.loginRegion.show(logoutView);
                
                logoutView.on('logoutClick', this.showLoginView);
            },
            
            showLoginView: function(authInfo){
                
                app.loginRegion.show(new LoginView({}));
            }
        });
        
        return new Controller();
    });
    
    