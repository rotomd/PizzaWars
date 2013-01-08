/*
    configuration variables.
    how would we protect this if we were concerned about security?
*/

//exports.MONGO_CONNECTION_URI = 'mongodb://pizza:wars@alex.mongohq.com:10065/dev';

exports.MONGO_HOST = process.env['DOTCLOUD_DB_MONGODB_HOST'] || "pizzawars-roto-db-0.azva.dotcloud.net";
exports.MONGO_PORT = process.env['DOTCLOUD_DB_MONGODB_PORT'] || 44253;
exports.MONGO_USER = process.env['DOTCLOUD_DB_MONGODB_LOGIN'] || "root";
exports.MONGO_PASSWORD = process.env['DOTCLOUD_DB_MONGODB_PASSWORD'] || "utRGaWVqRpw1eAWLCpbf";