/*
    routing for index page,
    page accessed via /
*/

var render = require('../views/templates.js').index;
//var rack = require('asset-rack');

exports.renderIndex = function(req, res){    
    res.send( render({}) );
};