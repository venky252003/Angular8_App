const logger = require('../util/logger');
const order = require('../models/orders.model');

module.exports = {
    get : function(req, res){
        var query = {};
        
        if(req.query.id){
            query.customerId = req.query.id;
        }
        
        order.find(query).exec(function(error, data){         
            if(error){
                logger.log(`Order Get : ${query}  - Error ${error}`);
                res.status(400).send('No Data Found');
            }
            res.status(200).json(data);
        })
    },
    post : function(req, res){
        var orders = new order(req.body);
        orders.orderId = 1201 + order.length + 1;

        orders.save(function(error){
            if(error){
                logger.log(`Order save error: ${error}`);
                return res.status(400).send('Error ' + error);
            }                
            return res.status(201).json(order);  
        })
    }
}

