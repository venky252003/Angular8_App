var mongose = require('mongoose');

var schema = mongose.Schema;
var relationship = require('mongoose-relationship');

var CustomerModel = new schema({
    id: { type: Number, required: true},
    name: {type: String, required: true},
    city: {type: String, required: true},
    orderTotal: {type: Number},
    customerSince: {type: String},
    createDate: { type: Date},
    order: [{type: schema.ObjectId, ref: 'order' }]  
});

CustomerModel.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();  
    // change the created field to current date
    this.createDate = currentDate;
    next();
  });
  

module.exports = mongose.model('customer', CustomerModel);