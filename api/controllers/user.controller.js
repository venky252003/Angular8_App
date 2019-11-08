const logger = require('../util/logger');
const user = require('../models/user.model');

module.exports ={
    get: function(req, res){
        user.find({}).exec(function(error, data){         
            if(error){
                logger.log(`Order Get : ${query}  - Error ${error}`);
                res.status(400).send('No Data Found');
            }
            res.status(200).json(data);
        })
    }
}