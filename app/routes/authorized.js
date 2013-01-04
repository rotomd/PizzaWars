/*
*   router for /authorized/
*/
var auth = require('../auth.js');

exports.json = function(req, res){    
    res.send( auth.isAuthorized(req) );
}