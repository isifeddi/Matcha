const express = require('express');
const logger = require('morgan');
const bodyparser = require('body-parser');
const v1 = require('./routes/v1');
var cors = require("cors");
const app = express();


// ------------- DB Connection  ------------- //
const connection = require('./models/db_connection');
const co = require('./models/db');


// ------------- Middlewares  ------------- //
app.use(cors());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));


// ------------- Routes  ------------- //

app.use(v1);

// ------------- ERR  ------------- //
app.use((req,res,next) =>{
     
    var err = new Error('not found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const error = err.message || 'Error processing your reuest';

    res.status(status).send({
        error
    })

});
module.exports = app;
