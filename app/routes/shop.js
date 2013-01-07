var count, pick, shop,
    Shops = require('../models/shops.js').Shops;

exports.post = function(request, response){
    response.contentType="application/json";
    Shops.find({available: false}, function(err, result){
        if (!err)
        {
            count = result.length;
            pick = Math.floor(Math.random()*count);
            shop = result[pick];
            shop.available = true; // Update shop to set available to true
            shop.save(); // save shop back to mongo
            response.send(shop);
        }
    });
};