var mongose = require('mongoose');

var schema = mongose.Schema;
var relationship = require('mongoose-relationship');

var CustomerModel = new schema({
    id: { type: Number, required: true},
    name: {type: String, required: true},
    city: {type: String, required: true},
    orderTotal: {type: Number},
    customerSince: {type: String},
    createdDate: { type: Date}    
});

module.exports = mongose.model('customer', CustomerModel);