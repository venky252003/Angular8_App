var mongose = require('mongoose');

var schema = mongose.Schema;

var UserModel = new schema({
    userId: { type: String, required: true},
    role: {type: String, required: true}
});


module.exports = mongose.model('user', UserModel);