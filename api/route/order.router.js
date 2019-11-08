var express = require('express');

var orderRoute = function(){
    var route = express.Router();
    var ctrl = require('../controllers/order.controller');

    route.route('/order').get(ctrl.get).post(ctrl.post);

    return route;
}

module.exports = orderRoute;


