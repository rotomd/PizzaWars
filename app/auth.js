/*
*   module for authorization utils
*/

exports.isAuthorized = function(request) {
    //maybe it's unnecessary to check for a user.id? user might suffice?
    if (request.session.user && request.session.user.id) {
        return { authorized: true, key: request.session.user.id };
    }
    return { authorized: false, key: "" };
}