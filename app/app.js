/*
    entry point for pizza wars application
    
  
 * This is the main (and only) node instance for running PizzaWars
 *    To Do:
 *      Authentication:
 *          When someone logs in, request.session.user_id
 *          will hold some credential that will be saved in
 *          mongo (IE guid to links to an account).
 *    	API:
 *			Implement calculating the shops score
 *			Implement getting a list of people
 *			Implement getting a person and their shop order
 *			Implement log in
 *		Pages:
 *			Implement home page
 *			Implement shops page
 *			Implement persons page
 *			Implement persons page editable
 * 
 * Finished:
 *      Authentication:
 *          get --> /authorized/ : returns { authorized: true/false, key: userKey }
 *          post --> /login/?username&password : returns { authorized: true/false, error: message }
 * 
 * Notes:
 *      NPMs must be installed in the pizzawars folder
 *      not the app folder. 
 * 
 * Mongo DB:
 *  > dotcloud run db mongo
 *  > use admin
 *  > db.auth("root", "[root-pw]");
 *  > show dbs
 *  > use admin
 *  > db.people.find()
 *  > db.shops.find()
 
    
    tom's todo:
        routes to handle:
            (i changed these a bit because i think having both people and person would get confusing)
            
    	    /shops/:name/
                - info about a specific shop
            /people/:name/
                - info about a specific people.
        
        fix people.jade and its router; they're written assuming different vars from db
        
        all of front end code.
*/

var 
    express = require('express'),
    app = express(),
    
    //object of all the possible routes for the application
    //todo: better would be to extract all of the routing stuff into a seperate file, and just require that.
    routes = {
        index: require('./routes/index.js'),
        people: require('./routes/people.js'),
        shops: require('./routes/shops.js'),
        login: require('./routes/login.js'),
        authorized: require('./routes/authorized.js'),
        shop: require('./routes/shop.js'),
        person: require('./routes/person.js'),
        rankings: require('./routes/rankings.js')
    },
    
    //for compiling jade:
    jadeCompile = require('./lib/jade-compile').jadeCompile,
    
    //database setup stuff.
    //todo: i should put this in a different file and require it.
    mongoose = require('mongoose'),
    config = require('./config.js'),
    db;    
    
    

/*******************************************************************
 * compile jade templates.
 ******************************************************************/ 
jadeCompile(__dirname + '/views', __dirname + '/public/scripts/templates', {
    client: true,
    compileDebug: true
});
 

/**********************************************************************
 * connect to db
 * *********************************************************************/
 
 //syntax: connect ( connection_string, [database], [port], [options], [callback] )
mongoose.connect( config.MONGO_HOST, "admin", config.MONGO_PORT, {user: config.MONGO_USER, pass: config.MONGO_PASSWORD} );
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
   console.log('Connected to mongo db');
});


  
/********************************************************************
 * configure server
 * todo: put this in a different file
 * *****************************************************************/
(function (){
    var port;
    port = process.env.PORT || 8080; // changed port since 8080 is what dotcloud runs under.
    
    //why isn't this working?
    //we can just set stylus to watch files while we're developing, but this would be more convenient.
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
    
    app.use(express.cookieParser()); 
    app.use(express.session({secret: 'my secret'}));
    
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
app.get('/api/shops', routes.shops.json);
app.get('/api/people', routes.people.json);
app.post('/api/login', routes.login.post);
app.get('/api/authorized', routes.authorized.json);
app.post("/api/shop", routes.shop.post);
app.get("/api/people/:person", routes.person.json);
app.post("/api/rankings", routes.rankings.post);




//start listening.
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port'));

//a global catch-all to encourage sloppy programming and worst practices.
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
