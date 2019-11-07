var express = require('express');
var mongoose = require('mongoose');
var body = require('body-parser');
const logger = require('./api/util/logger');

var app = express();


var app = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Connect to the database before starting the application server.
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/angular",
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    function (err, client) {
        if (err) {
          logger.log(err)
          console.log(err);
          process.exit(1);
        }
      
        const db = mongoose.connection;

        db.on('error', error=>{
            logger.log('Error connecting to database');
            //throw new Error('Error connecting to database')
        });
        
        db.once('open', () => console.log('Connected to Database'));   

        // Initialize the app.
        var server = app.listen(process.env.PORT || 5200, function () {
          var port = server.address().port;
          console.log("App now running on port", port);
        });
    }
);

app.use(function (req, res, next) {    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(body.urlencoded({extended: true}));
app.use(body.json());

var customerroute = require('./api/route/customer.router')();
app.use('/api', [customerroute]);

