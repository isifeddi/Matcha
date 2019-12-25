const express = require('express');
const logger = require('morgan');
const bodyparser = require('body-parser');
const v1 = require('./routes/v1');
const cors = require('cors')
const up = require('../src/controllers/uploadFile')
const app = express();

app.use(express.static('public'));
// ------------- DB Connection  ------------- //
const connection = require('./Config/db_connection');
//const co = require('./models/config');


// ------------- Middlewares  ------------- //
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.use(cors())



// ------------- Routes  ------------- //
app.use(up)
app.use(v1);
// ------------- ERR  ------------- //
app.use((req,res,next) =>{
     
    var err = new Error('not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err)
    const status = err.status || 500;
    const error = err.message || 'Error processing your reuest';

    res.status(status).send({
        error
    })

});
module.exports = app;
