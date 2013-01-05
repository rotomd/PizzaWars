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
        var locals;        
        if(!err){
            locals = {
                shops: results[0],
                participants: results[1]
            };
            
            res.render('index', locals, function(err, html){
                res.send(html);
            });
        } else {
            console.log(err);
        }
    });
};