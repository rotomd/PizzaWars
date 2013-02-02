/*
*   controller for login/logout functionality
*/

define([
    'backbone',
    'marionette',
    'underscore',
    'jquery',
   // 'app',
    'vent',
    
    //logout stuff
    'login/Logout.view',
    
    //login stuff
    'login/Login.view'
    
    ],
    
    function(bb, mr, _, $, //app, 
    vent, LogoutView, LoginView){
        var Controller = mr.Controller.extend({
            
          
            initialize: function(options){
                //configureAuthorization(options);
                vent.on('authorized', this.showLogoutView);
                
                if(options.currentUser && options.currentUser.id){
                    this.showLogoutView(options);
                } else {
                    this.showLoginView();
                }
            },
            
        
            
            showLogoutView: function(authInfo){
                var logoutView = new LogoutView();
                
                vent.trigger('show', 'loginRegion', logoutView);
                //app.loginRegion.show(logoutView);
                
                logoutView.on('click:logout', this.logout, this);                
            },
            
            logout: function(authInfo){
                //send off the ajax request to log out.
                $.ajax({
                    type: 'post',
                    url: 'api/logout'
                });
                
                vent.trigger('set', 'currentUser', null)
                //app.currentUser = null;
             
                //switch the views.
                this.showLoginView(authInfo);
            },
            
            showLoginView: function(authInfo){    
                var loginView = new LoginView();
                //app.loginRegion.show(loginView);
                
                vent.trigger('show', 'loginRegion', loginView);
                
                loginView.on('click:login', this.login, this);
            },
            
            login: function(authInfo){
                var that = this;
                $.ajax({
                    type: 'post',
                    data: authInfo,
                    url: 'api/login',
                    success: function(result){
                        if(result.authorized){
                            //app.currentUser = result.user;
                            vent.trigger('set', 'currentUser', result.user);
                            that.showLogoutView(authInfo);
                        }
                    }
                });
            }
        });
        
        return Controller;
    });
    
    