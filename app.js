/*
    entry point for pizza wars application
    
    todo:
        since i'm developing in cloud9 with a connection to a mongodb on mongohq,
        and you're doing something a bit different,
        we should leverage the variable process.env.? to allow us both to use the 
        exact same code. 
        
        routes to handle:
            (i changed these a bit because i think having both people and person would get confusing)
            
            /shops/
                - list of all shops
    	    /shops/:name/
                - info about a specific shop
 	    	/people/
                - list of all people
            /people/:name/
                - info about a specific people.

*/

//wrap everything in a function called when our assets are ready. assets are 
// compiled jade templates, maybe more things eventually.
var assets = require('./assets.js').assets;

assets.on('complete', function(){ 
    var express = require('express'),
        app = express(),
        
        routes = {
            index: require('./routes/index.js'),
            people: require('./routes/people.js'),
            shops: require('./routes/shops.js')
        };
      
      //configuration of express
    (function (){
        var port;
        port = (port = process.env.PORT) != null ? port : 3000;
        
        
        // all environments
        app.set('port', port);
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.use(express.favicon());
        
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        
        
        app.use(assets); //important: call app.use(assets) before app.use(router)
        
        app.use(app.router);
        
        // development only
        if ('development' === app.get('env')) {
            console.log('Running in development mode');
            app.use(express.logger('dev'));
            app.use(express.errorHandler());
        }
        
        // production only
        if ('production' === app.get('env')) {
            console.log('Running in production mode');
        }    
    })();
    
    
    //routes.
    app.get('/', routes.index.renderIndex);    
    
    
    //start listening.
    app.listen(app.get('port'));
    console.log('Listening on port ' + app.get('port'));

});

