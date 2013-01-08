/*
*   configure the routes for the application
*/
exports = module.exports = function(app){  
    
    //grab the individual routes
    var index = require('./routes/index.js'),
        people = require('./routes/people.js'),
        shops = require('./routes/shops.js'),
        login = require('./routes/login.js'),
        authorized = require('./routes/authorized.js');

    //index
    //app.get('/', index.html);  
    
    //shops
    //app.get('/shops', shops.html);
    //app.get('/api/shops', shops.json)
    
    //app.get('/people', people.json);
    //app.post('/login', login.post);
    //app.get('/authorized', authorized.json);
    
    app.get('/api/shops', shops.json);
    app.get('*', index.html);
};