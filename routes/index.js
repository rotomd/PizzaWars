/*
    routing for index page,
    page accessed via /
*/

var render = require('../views/server-template-compiler.js').index;

exports.render = function(req, res){    
    //need to retrieve the shops array.
    //need to retrieve the participants array.
    
    var locals = {
        shops: [
            {
                rank: 1,
                dateOrdered: 'Feb 15',
                address: '26 bucknasty b.',
                name: 'toms good pizza'
            }
            
        ],
        participants: [
            'tom',
            'marcus clemons'
        ]    
    };
    
    res.send( render( locals ) );
};