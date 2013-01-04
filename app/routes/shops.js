/**
 * API request to get all shops in the database
 **/

var Shops = require('../models/shops.js').Shops;

exports.json = function(req, res) {
    Shops.find({}, function(err, result) {
        if(!err){
            res.send( result );
        } else {
            console.log(err);
        }
    });
};
