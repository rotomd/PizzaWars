/*
*   exports the function to log out the current user.
*   todo: maybe all the auth stuff should be put into a single file?
*   I don't see much reason to keep them seperate.
*/

exports.post = function(request, response){
    delete request.session.user;
    response.send('logged out');
};