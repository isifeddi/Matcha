const conn = require('../Config/db_connection');
const queries = require("../Config/queries");
const INSERT = queries.INSERT;
const SELECT = queries.SELECT;
module.exports = {
    insertImage : function (value) {
        return new Promise ((resolve, reject) => {
            conn.query(INSERT.AddImage, [value.user_id,value.path],(err,res) => {
                if(err)
                {
                    reject(err);
                }
                    
                else
                    resolve(true);
            }); 
        })            
    },
    getImages : function (user_id) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetImages, [user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(res);
            }); 
        })            
    },
};