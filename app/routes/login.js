var Logins = require('../models/logins.js').Logins;

exports.post = function(request, response){
    var result, responseObj,
        username = request.param("username", ""),
        password = request.param("password", "");
        
    response.contentType = "application/json";
    
    Logins.find({username: username, password: password}, function(err, results){
        if (!err) {
            if (results.length === 1) {
               result = results[0];
               
               console.log(request.session);
               
               request.session.user = {
                   id: result._id,
                   username: username
               }
               
             
               responseObj = { 
                    authorized: true,
                    user: request.session.user
                };
               response.send( responseObj );
            } else {
                responseObj = { username: username, password: password, authorized: false, results: results };
                response.send( responseObj );
            }
        } else {
            console.log(err);
            response.send({error: "Could not query object"});
        }
    });
};