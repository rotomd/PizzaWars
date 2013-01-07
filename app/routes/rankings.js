var People = require('../models/people.js').People;

exports.post = function(request, response)
{
    var person,
        rankingString = request.param("rankings", ""),
        rankings = rankingString ? rankingString.split(",") : [],
        key = request.session.user_id;

    if (key)
    {
        People.find({key: key}, function(err, people){
            if (!err && people.length === 1)
            {
                person = people[0];
                person.rankings = rankings;
                person.save();
                response.send({error: ""});
            }
        });
    }else
    {
        response.send({error: "Not authorized: Have you logged in?"});
    }
    //response.end();
};