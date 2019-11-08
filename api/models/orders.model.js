var mongose = require('mongoose');

var schema = mongose.Schema;


var OrderModel = new schema({
    orderId: { type: Number, required: true},
    customerId: {type: Number, required: true},
    orderQty: {type: Number, required: true},
    product: {type: String},
    unitPrice: {type: Number},
    createDate: { type: Date}    
});

OrderModel.pre('save', function(next) {    
    // get the current date
    var currentDate = new Date();  
    // change the created field to current date
    this.createDate = currentDate;
    next();
  });
  

module.exports = mongose.model('order', OrderModel);