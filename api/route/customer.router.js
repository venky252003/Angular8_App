var express = require('express');

var customerRoute = function(){
    var custroute = express.Router();
    var custCtl = require('../controllers/customer.controller')();

    custroute.route('/customer').get(custCtl.get).post(custCtl.post);
    custroute.use('/customer/:id', function(req, res, next){
        custroute.filiter(req, res, next);
    });

    custroute.route('/customer/:id').get(function(req, res){
        res.status(200).json(req.customer);
    }).put(custroute.put).delete(custroute.delete).patch(custroute.patch);

    return custroute;
}

module.exports = customerRoute;