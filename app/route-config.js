/*
*   configure the routes for the application
*/
exports = module.exports = function(app){  
    
    //grab the individual routes
    var index = require('./routes/index.js'),
        people = require('./routes/people.js'),
        shops = require('./routes/shops.js'),
        login = require('./routes/login.js'),
        authorized = require('./routes/authorized.js'),
        shop= require('./routes/shop.js'),
        person= require('./routes/person.js'),
        rankings= require('./routes/rankings.js');


    //index
    //app.get('/', index.html);  
    
    //shops
    //app.get('/shops', shops.html);
    //app.get('/api/shops', shops.json)
    
    //app.get('/people', people.json);
    //app.post('/login', login.post);
    //app.get('/authorized', authorized.json);
    
    //app.get('/', index.html);    
    app.get('/api/shops', shops.json);
    app.get('/api/people', people.json);
    app.post('/api/login', login.post);
    app.get('/api/authorized', authorized.json);
    app.post("/api/shop", shop.post);
    app.get("/api/people/:person", person.json);
    app.post("/api/rankings", rankings.post);

    app.get('*', index.html);
};