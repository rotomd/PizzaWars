/*
    routing for index page,
    page accessed via /
*/

var 
    Shops = require('../models/shops.js').Shops,
    People = require('../models/people.js').People,
    async = require('async');

exports.html = function(req, res){    
    
    //need to get the list of shops and the list of participants
    async.parallel([
        function(callback){
            //get the shops
            Shops.find({}, callback);
        },
        function(callback){
            //get the participants.
            People.find({}, callback);
        }
    ],
    function(err,results){        
        var locals,
            initialData;
    
        if(!err){
            
            initialData = {
                currentUser: req.session.user || null
            };
            
            locals = {
                shops: results[0],
                participants: results[1],
                initialDataString: JSON.stringify(initialData),
                initialData: initialData
            };
            
        
            
            res.render('index', locals, function(err, html){
                res.send(html);
            });
        } else {
            console.log(err);
        }
    });
};