const logger = require('../util/logger');

var customerController = function(){
    var customer = require('../models/customer.model');
    
    var get = function(req, res){
        
        var query = {};
        if(req.query.name){
            query.name = req.query.name;
        }

        customer.find(query).exec(function(error, result){
            logger.log(`Customer Get Data: ${result}`);
            if(error)
                res.status(400).send('No Data Found');
            else
                res.status(200).json(result);
        });
    }

    var post = function(req, res){
        var cust = new customer(req.body);
        cust.createDate = new Date();
        cust.save(function(error){
            logger.log(`Customer save error: ${error}`);
            if(error)
                return res.status(400).send('Error ' + error);
            else
                return res.status(201).json(cust);
            
            
        });
    }

    var filiter =  function(req, res, next) {
        customer.findById(req.params.id, function(error, cust){              
            if(error){
                console.log(error);
                res.status(500).send('Error ' + error);
            }
            else if(cust){             
                req.cust = cust;
                next();
            }
            else {
                res.status(401).send('No Data Found');            
            }        
        })
    }

    var put = function(req, res){
        req.customer.name = req.body.name;
        req.customer.city = req.body.city;
        req.customer.orderTotal = req.body.orderTotal;
        req.customer.customerSince = req.body.customerSince;
             
        //req.account.save();
        req.customer.save(function(error){
            if(error){
                console.log(error);
                res.status(500).send('Error ' + error);
            }
            res.status(200).json(req.customer);
        });
    }

    var patch = function(req, res){
        if(req.body._id)
            delete req.body._id;

        for(var p in req.body){
            req.customer[p] = req.body[p];
        }

        req.customer.save(function(error){
            if(error){
                console.log(error);
                res.status(500).send('Error ' + error);
            }

            res.status(200).json(req.customer);
        });
    }

    var dele = function(req, res){
         req.customer.remove(function(error){
            if(error){
                console.log(error);
                res.status(500).send('Error ' + error);
            }
            res.status(204).send('Removed');
        });
    }

    return{
        get: get,
        post: post,
        filiter: filiter,
        put: put,
        delete: dele,
        patch: patch
    }

}

module.exports = customerController;