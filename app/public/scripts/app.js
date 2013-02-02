/*
*   app initialization code.
*/
define([
  'jquery', 
  'underscore', 
  'backbone',
  'marionette',
  
  //the main router and it's controller
  'Router',
  'Controller',
  
  'vent',
  
  //header view is just included here because it is so simple it doesn't need a controller.
  'views/HeaderView',
  //same with the side menu.
  // in an application where the side menu can vary greatly, it might be wise to use a controller 
  // to handle that logic.
  //    Were that the case, we would include that controller here.
  'views/SideMenuView',
  
  //controller for login-related functionality.
  'login/Login.controller'
  
  
], function($, _, Backbone, mr, MainRouter, MainRouterController, vent, HeaderView, SideMenuView, LoginController){
  
    var app = new mr.Application(),
    
    //set up some defaults.
    //app.currentUser = null;
    
    //figure out the initialData right away... 
    // the data is in the first script tag, so it's immediately available.
    //todo: AMD modulize the initialData
        initialData = window.initialData;
        
    if(initialData.currentUser && initialData.currentUser.id){
        //someone is logged in.
        app.currentUser = initialData.currentUser;
    } 
    
    //set up handling of application wide events
    vent.on('set', set);
    vent.on('show', show);
    
    vent.on('get', get);
    
    app.addRegions({
        mainRegion: '#content',
        sidemenuRegion: '#side-menu',
        headerRegion: '#header',
        loginRegion: '#login-container'
    });
    
    //add the routing initializer
    app.addInitializer(function(options){        
        var controller = new MainRouterController();
        app.mainRouter = new MainRouter({controller: controller});
        
        Backbone.history.start({pushState: true});
    });
    
    app.addInitializer(function(options){        
        app.headerRegion.attachView(new HeaderView({el:'#header'}));
        app.sidemenuRegion.attachView(new SideMenuView({el: '#side-menu'}));
    });
    
    //set up the initial data for the app
    //this includes figuring out if someone is logged in
    app.addInitializer(function(options){
        app.loginController = new LoginController({currentUser: app.currentUser});
    });

    
    function set(name, value){
        app[name] = value;
    }
    
    function show(region, layout){
        app[region].show(layout);
    }
    
    //this is some homebrewed pub sub.
    // it's rad
    // objects can request properties from the app
    //  (even nested properties, provided in an array)
    // and this will trigger the 'got' even on that requester
    // with the property as an arg
    function get(items, caller){
        var property = app,
            i;
        
        if(_.isArray(items)){
            for(i=0;i<items.length; i++){
                if(items[i] in property){
                    property = property[items[i]];
                } else {
                    caller.trigger('got');
                }
            }
            caller.trigger('got', property);
        } else {
            caller.trigger('got', app[items])
        }
    }

    
    return app;
    
});