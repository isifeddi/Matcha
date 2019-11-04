const conn = require('../../Config/db_connection');
const queries = require("../../Config/queries");
const USER = queries.User;


/*Login = (username, password) => {
    conn.query(USER.GetUserByUsername, [username],(err,res) => {
        if(err)
            throw err;
        });
    }

module.exports = Login;*/


module.exports = {
    getUserByUsername: function (username) {
        conn.query(USER.GetUserByUsername, [username],(err,res) => {
            if(err)
                throw err;
            
            //console.log(res);
        });
    },
};