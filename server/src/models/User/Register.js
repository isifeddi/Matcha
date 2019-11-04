const conn = require('../../Config/db_connection');
const queries = require("../../Config/queries");
const USER = queries.User;


Register = (lastname, firstname, username, email, password) => {
    conn.query(USER.AddUser, [lastname, firstname, username, email, password],(err,res) => {
        if(err)
        {
            
            throw err;
        }
            

        });
    }

module.exports = Register;