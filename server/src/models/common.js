const conn = require('../Config/db_connection');
const queries = require("../Config/queries");
const USER = queries.User;


module.exports = {
    getUser: function (type, value) {
        return new Promise ((resolve, reject) =>{
            conn.query(USER[type], [value],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(res);
            }); 
        })            
    },
};