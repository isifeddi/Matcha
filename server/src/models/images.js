const queries = require("../Config/queries");
const USER = queries.User;

module.exports = {
    insertImage : function (type, value) {
        return new Promise ((resolve, reject) => {
            conn.query(USER[type], [value.userId,value.path],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(true);
            }); 
        })            
    },
};