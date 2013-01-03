/*
*   definitions of mongoose schema for shops
*/
var mongoose = require('mongoose');

var shopSchema = new mongoose.Schema({
    name: String,
    address: String,
    dateOrdered: Date    
});

var Shops = mongoose.model('Shops', shopSchema, 'Shops');

exports.Shops = Shops;

