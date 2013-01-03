/*
    routing for index page,
    page accessed via /
    todo: after reading some of the express source, i've realized that we don't need to precompile
    our own server side templates.
    
    so get rid of that stupidness.
*/

var render = require('../views/server-template-compiler.js').index,
    Shops = require('../models/shops.js').Shops,
    Participants = require('../models/people.js').Participants,
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
            Participants.find({}, callback);
        }
    ],
    function(err,results){
        var locals;        
        if(!err){
            locals = {
                shops: results[0],
                participants: results[1]
            };
            res.send( render( locals ) );
        } else {
            console.log(err);
        }
    });
};