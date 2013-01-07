var People = require('../models/people.js').People;

exports.json = function(request, response)
{
    var key = request.params.person;
    if (key)
    {
        People.find({key: key}, function(err, person){
           if (!err && person.length === 1)
           {
               response.send(person[0]);
           }
        });
    }
};

