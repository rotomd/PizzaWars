var express = require('express'),
    app = express();
  
  //configuration
(function (){
    var port;
    port = (port = process.env.PORT) != null ? port : 3000;
    
    
    // all environments
    app.set('port', port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    
    // development only
    if ('development' === app.get('env')) {
      return app.use(express.errorHandler());
    }
    
    // production only
    if ('production' === app.get('env')) {
     
    }    
})();


//routes.
app.get('/', function(req, res){
    res.send('Hello World');
});



//start listening.
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port'));




