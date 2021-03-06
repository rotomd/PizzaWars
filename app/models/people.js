/*
*   definitions of mongoose schema for participants
*/
var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    first: String,
    last: String,
    rankings: Array,
    key: String
});

var People = mongoose.model('People', personSchema, 'people');

exports.People = People;

