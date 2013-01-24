/*
*   app initialization code.
*/
define([
  'jquery', 
  'underscore', 
  'backbone',
  'marionette',
  
  'views/HeaderView'
], function($, _, Backbone, mr, HeaderView){
  
    var app = new mr.Application();
    
    app.addRegions({
        mainRegion: '#content',
        sidemenuRegion: '#side-menu',
        headerRegion: '#header'
    });
    
    app.addInitializer(function(options){        
        app.headerRegion.attachView(new HeaderView());
    });
    
    return app;
    
});