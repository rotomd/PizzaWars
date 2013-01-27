/*
*   app initialization code.
*/
define([
  'jquery', 
  'underscore', 
  'backbone',
  'marionette',
  
  'views/HeaderView',
  
  'views/SideMenuView'
  
], function($, _, Backbone, mr, HeaderView, SideMenuView){
  
    var app = new mr.Application();
    
    app.addRegions({
        mainRegion: '#content',
        sidemenuRegion: '#side-menu',
        headerRegion: '#header',
        loginRegion: '#login-container'
    });
    
    app.addInitializer(function(options){        
        app.headerRegion.attachView(new HeaderView());
        //app.sidemenuRegion.attachView(new SideMenuView());
    });
    
    //set up the initial data for the app
    //this includes figuring out if someone is logged in
    app.addInitializer(function(options){
        var initialData = window.initialData;
        if(initialData.currentUser && initialData.currentUser.id){
            //someone is logged in.
            app.currentUser = initialData.currentUser;
        }
    });

    
    return app;
    
});