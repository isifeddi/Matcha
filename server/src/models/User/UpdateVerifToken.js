const conn = require('../../Config/db_connection');
const queries = require("../../Config/queries");
const USER = queries.User;


UpdateVerifToken = (token, email) => {
    conn.query(USER.UpdateToken, [token, email],(err,res) => {
        if(err)
        {
            throw err;
        }
        else
            res.send(true); 
    });
}

module.exports = Register;