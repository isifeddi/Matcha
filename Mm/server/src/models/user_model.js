const con = require('./db_connection');
const queries = require("../config");
const USER = queries.User;

module.exports = {
    userRegister: function  (firstname, lastname, username, email, password){
        con.query(USER.AddUser, [firstname, lastname, username, email, password],(err,ress) => {
        if(err)
            throw err;
        });
    }
}