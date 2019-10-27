const conn = require('./db_connection');

conn.query("CREATE DATABASE IF NOT EXISTS MATCHA", (err, res) =>{
    if(err){
        throw err;
    }
    console.log('Created');
})