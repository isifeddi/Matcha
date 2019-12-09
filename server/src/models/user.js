
const conn = require('../Config/db_connection');
const queries = require("../Config/queries");
  
const SELECT = queries.SELECT;
const INSERT = queries.INSERT;
const UPDATE = queries.UPDATE;



module.exports = {
    Register :function  (lastname, firstname, username, email, password) {
        conn.query(INSERT.AddUser, [lastname, firstname, username, email, password],(err,res) => {
            if(err)
            {
                throw err;
            }
        });
    },
    getUser: function (type, value) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT[type], [value],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(res);
            }); 
        })            
    },
    ResetPassword : function (password, token) {
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.ResetPassword, [password, token],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
    UpdateVerifToken : function (email, token) {
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.UpdateToken, [token, email],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
    Confirmed: function (email){
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.Confirmed, email,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
    notConfirmed: function (email){
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.notConfirmed, email,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
   
    getOptions: function () {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetInterests,(err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },
    createOption: function (option) {
        return new Promise ((resolve, reject) => {
            conn.query(INSERT.CreateInterest, option, (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },
    getStep: function (email) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetStep, [email], (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },
};