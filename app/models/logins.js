/*
*   definition of login schema
*/

var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    username: String,
    password: String
});

var Logins = mongoose.model('Logins', loginSchema, 'logins');

exports.Logins = Logins;