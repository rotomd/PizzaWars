//var People = require('../models/people.js').People;

exports.Rating = function(shopKey, people)
{
    var i, ii, j, jj, rankings, ranking,
        scores = [];
    
    for(i=0, ii=people.length; i<ii; ++i)
    {
        rankings = people[i].rankings;
        for(j=0, jj=rankings.length; j<jj; ++j)
        {
            ranking = rankings[j];
            if (ranking === shopKey)
            {
                scores.push(j+1); // add 1 since we start at zero.
            }
        }
    }
    return (scores.length ? avg(scores) : null);
};

function avg(arr)
{
    var i,
        length = arr.length,
        sum = 0
    
    for(i=0; i<length; ++i)
    {
        sum += parseInt(arr[i], 10);
    }
    return sum/length;
}