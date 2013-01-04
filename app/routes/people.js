/*
*   functions for the people route
*/

var People = require('../models/people.js').People;

exports.json = function(req,res){
    //specify the fields we want so we don't reveal and passwords, as hashed as they may be
    //(i think this always gives the id... do we care?)
    People.find({}, 'name shopList', function(err, result) {    
        if(!err){
            res.send( result );
        } else {
            console.log(err);
        }
    });
};
