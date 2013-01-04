/*
*   module for authorization utils
*/

exports.isAuthorized = function(request) {
    if (request.session.user_id) {
        return { authorized: true, key: request.session.user_id };
    }
    return { authorized: false, key: "" };
}