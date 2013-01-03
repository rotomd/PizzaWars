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

var 
    //include requirejs to make it easier to compile jade templates for client side
    // this could be accomplished without using requirejs on the server side,
    // and i'd like to make that happen.
    requirejs = require('requirejs'),
    
  //  stylus = require('stylus'),
    
    //express derrrr
    express = require('express'),
    app = express(),
    
    //object of all the possible routes for the application
    routes = {
        index: require('./routes/index.js'),
        people: require('./routes/people.js'),
        shops: require('./routes/shops.js')
    },
    
    //database setup stuff.
    mongoose = require('mongoose'),
    config = require('./config.js'),
    db;
    

/*******************************************************************
 * compile jade templates.
 * todo: all of this can be done without using requirejs on the server side.
 * so make that happen.
 ******************************************************************/ 
 
//set up requirejs to run on server side.
requirejs.config({
  baseUrl: __dirname,
  nodeRequire: require
});

//compile jade templates into javascript for client side usage.
requirejs(['lib/jade-compile'], function(jadeCompile) {
  //compile all public templates from 'views/templates' to client-ready javascript functions in 'public/templates'
  jadeCompile('views/templates', 'public/scripts/templates', {
    client: true,
    compileDebug: true
  });
});


/**********************************************************************
 * connect to db
 * *********************************************************************/
mongoose.connect(config.MONGO_CONNECTION_URI);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
   console.log('Connected to mongo db');
});


  
/********************************************************************
 * configure server
 * *****************************************************************/
(function (){
    var port;
    port = (port = process.env.PORT) != null ? port : 3000;
    
    //why isn't this working?
   /* app.use(require("stylus").middleware({
        src: __dirname + "/public/style/stylus",
        dest: __dirname  + '/public/style',
        compress: true
    }));*/
    
    // all environments
    app.set('port', port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    
    
    
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    
    app.use(express['static'](__dirname + '/public'));        
    
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
app.get('/', routes.index.html);    
app.get('/shops', routes.shops.json)
app.get('/people', routes.people.json)




//start listening.
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port'));

//a global catch-all to encourage sloppy programming and worst practices.
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
