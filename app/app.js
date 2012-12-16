/**
 * This is the main (and only) node instance for running PizzaWars
 *	To Do:
 *		API:
 *			Implement calculating the shops score
 *			Implement getting a list of people
 *			Implement getting a person and their shop order
 *			Implement log in
 *		Pages:
 *			Implement home page
 *			Implement shops page
 *			Implement persons page
 *			Implement persons page editable
 * 
 */
 
 // test comment to see if I can synch with cloud 9 and git hub and local.
 //foo bar

/* Express quick setup */
var express = require('express');
var app = express();

/* mongodb setup */
var mongo = require('mongodb');

var host = process.env['DOTCLOUD_DB_MONGODB_HOST'] || 'localhost';
var port = process.env['DOTCLOUD_DB_MONGODB_PORT'] ||  27017;
port = parseInt(port);
var user = process.env['DOTCLOUD_DB_MONGODB_LOGIN'] || undefined;
var pass = process.env['DOTCLOUD_DB_MONGODB_PASSWORD'] || undefined;

var mongoServer = new mongo.Server(host, port, {});
var db = new mongo.Db("admin", mongoServer, {auto_reconnect:true});

/**
 * All API requests will go in this section
 * 	List of possible API calls:
 *		/shops/
 *		/shop/{name}/
 *		/people/
 *		/person/{name}/
 **/

/**
 * API request to get all shops in the database
 **/
app.get("/shops/", function(request, response){
	response.contentType = "application/json";
	db.collection("shops", function(err, collection){
		if (!err)
		{
			collection.find().toArray(function(err, results){
				if (!err)
				{
					response.write(JSON.stringify(results));
					response.end();
				}else
				{
					response.write(JSON.stringify({error: err}));
					response.end();
				}
			});
		}else
		{
			response.write(JSON.stringify({error: err}));
			response.end();
		}
	});
});
/**
 * All page handles will occur here.
 *	Possible Pages:
 *		html.html
 *		person.html
 *		shop.html
 **/
app.get("/", function(req, res){
    var fs = require("fs");
    fs.readFile("home.html", function(err,data)
    {
    	if (err)
    	{
    		res.write(err);
    		res.end();
    	}else
    	{
    		res.write(data);
    		res.end();
    	}
    });
});
var authError = "NO ERROR";
db.open(function(err){
    if(err) 
    {
    	console.log(err);
    	authError = "1." + err;
    }

    if(user && pass) 
    {
        db.authenticate(user, pass, function(err) {
        	if (err)
        	{
        		authError = "2." + err;
        	}
            app.listen(8080);
        });
    }
    else {
        app.listen(8080);
    }
});