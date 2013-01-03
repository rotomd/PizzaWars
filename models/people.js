/*
*   definitions of mongoose schema for participants
*/
var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: String,
    shopList: Array,
    password: String
});

var People = mongoose.model('People', personSchema, 'people');

exports.People = People;

