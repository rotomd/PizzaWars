/*
    entry point for pizza wars application
    
  
 * This is the main (and only) node instance for running PizzaWars
<<<<<<< HEAD
 *	To Do:
=======
 *    To Do:
>>>>>>> cd78b67fb4f1fa83d989c10ed481a30849e0f12d
 *      Authentication:
 *          When someone logs in, request.session.user_id
 *          will hold some credential that will be saved in
 *          mongo (IE guid to links to an account).
 *		API:
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
<<<<<<< HEAD
 */

console.log("first line");
(function(){
    "use strict";
    console.log("starting app");
    /* Express quick setup */
    var express = require('express'),
        connect = require('connect'),
        path = require('path'),
        app = express(),
        server = require("http").createServer(app),
        _config = require("./pizzaWars.config"); // config holds environment variables, when they do not exist.
        //io = require("socket.io").listen(server);
    
    var config = _config.pizzaWarsConfig || {
        mongoHost : "localhost",
        mongoPort: 27017,
        mongoUser: undefined,
        mongoPass: undefined
    }
    
    /* mongodb setup */
    var mongo = require('mongodb');
    
    var host = process.env['DOTCLOUD_DB_MONGODB_HOST'] || config.mongoHost;
    var port = process.env['DOTCLOUD_DB_MONGODB_PORT'] || config.mongoPort;
    port = parseInt(port);
    var user = process.env['DOTCLOUD_DB_MONGODB_LOGIN'] || config.mongoUser;
    var pass = process.env['DOTCLOUD_DB_MONGODB_PASSWORD'] || config.mongoPass;
    
    console.log(host);
    console.log(port);
    console.log(user);
    console.log(pass);
    
    var mongoServer = new mongo.Server(host, port, {});
    var db = new mongo.Db("admin", mongoServer, {auto_reconnect:true});
    
    /**
     * All API requests will go in this section
     *  List of possible API calls:
     *		/shops/
     *		/shop/{name}/
     *		/people/
     *		/person/{name}/
     **/
     
     /*
     io.sockets.on("connection", function(socket){
         socket.emit("news", { hello: "world" });
     });
     */
     
    function isAuthorized(request)
    {
        if (request.session.user_id)
        {
            return { authorized: true, key: request.session.user_id };
        }
        return { authorized: false, key: "" };
    }
    
    function writeError(response, error)
    {
        response.send(JSON.stringify({error: error}));
    }
     
     app.configure(function(){
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.session({secret: 'my secret'}));
        app.use(express.static(__dirname + "/public"));
     });
     
    
     
    
    app.get("/authorized/", function(request, response){
        var authObj = isAuthorized(request);
        response.contentType = "application/json";
        response.send(JSON.stringify(authObj));
    });
    
    app.post("/login/", function(request, response){
        var result, responseObj,
            username = request.param("username", ""),
            password = request.param("password", "");
        response.contentType = "application/json";
        db.collection("logins", function(err, collection){
            if (!err)
            {
                collection
                    .find({username: username, password: password})
                    .toArray(function(err, results){
                        if (!err)
                        {
                            if (results.length === 1)
                            {
                               result = results[0];
                               request.session.user_id = result.key;
                               responseObj = { authorized: true };
                               response.send(JSON.stringify(responseObj));
                            }else
                            {
                                responseObj = { username: username, password: password, authorized: false, results: results };
                                response.send(JSON.stringify(responseObj));
                            }
                        }else
                        {
                            writeError(response, "Could not query object");
                        }
                });
            }else
            {
                writeError(response, "Could not connect to database");
            }
        });
    });
    
    /**
    * API request to get all shops in the database
    **/
    app.get("/shops/", function(request, response){
        response.contentType = "application/json";
        db.collection("shops", function(err, collection){
            if (!err)
            {
                collection.find().toArray(function(err, results){
                    if (!err)
                    {
                        response.send(JSON.stringify(results));
                    }else
                    {
                        writeError(response, err);
                    }
                });
            }else
            {
                writeError(response, err);
            }
        });
    });
    app.get("/people/", function(request, response){
        response.contentType = "application/json";
        db.collection("people", function(err, collection){
           if (!err)
           {
               collection.find().toArray(function(err, results){
                   if (!err)
                   {
                       response.write(JSON.stringify(results));
                       response.end();
                   }else
                   {
                       writeError(response, err);
                   }
               });
           }else
           {
               writeError(response, err);
           }
        });
    });
    
    app.listen(process.env.PORT || 8080);
    var authError = "NO ERROR";
    db.open(function(err){
        if(err) 
        {
            console.log(err);
            authError = "1." + err;
        }
    
        if(user && pass) 
        {
            db.authenticate(user, pass, function(err) {
                if (err)
                {
                    authError = "2." + err;
                }
                //app.listen(8080);
            });
        }
        else {
            //app.listen(8080);
        }
    });
})();
=======
 
    
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
        authorized: require('./routes/authorized.js')
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
    port = (port = process.env.PORT) != null ? port : 3000;
    
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
app.get('/shops', routes.shops.json);
app.get('/people', routes.people.json);
app.post('/login', routes.login.post);
app.get('/authorized', routes.authorized.json);




//start listening.
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port'));

//a global catch-all to encourage sloppy programming and worst practices.
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
>>>>>>> cd78b67fb4f1fa83d989c10ed481a30849e0f12d
