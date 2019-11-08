var express = require('express');

var userRoute = function(){
    var route = express.Router();
    var ctrl = require('../controllers/user.controller');

    route.route('/user').get(ctrl.get);

    return route;
}

module.exports = userRoute;