/**
 * API request to get all shops in the database
 **/

var Shops = require('../models/shops.js').Shops,
    People = require('../models/people.js').People,
    Rating = require('../public/scripts/rating.js').Rating;


exports.json = function(req, res) {
    Shops.find({}, function(err, shops) {
        //var i, ii, shop;
        if(!err)
        {
            //res.send( result );
            People.find({}, function(peopleErr, people) {
                var i, ii, shop, score;
                if (!peopleErr)
                {
                    for(i=0, ii=shops.length; i < ii; ++i)
                    {
                        shop = shops[i];
                        score = Rating(shop.key, people);
                        shop.set("score", score);
                    }
                    res.send(shops);
                } else
                {
                    console.log(peopleErr);
                }
            });
        } else 
        {
            console.log(err);
        }
    });
};
