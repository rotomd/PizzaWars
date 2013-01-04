/*
*   definitions of mongoose schema for shops
*/
var mongoose = require('mongoose');

var shopSchema = new mongoose.Schema({
    name: String,
    address: Array,
    available: Boolean,
    key: String,
    dateOrdered: Date    
});

var Shops = mongoose.model('Shops', shopSchema, 'shops');

exports.Shops = Shops;
