var nodemailer = require('nodemailer');
const conn = require('../Config/db_connection');
const queries = require("../Config/queries");
const USER = queries.User;
const INTERESTS = queries.Interests;


module.exports = {
    getUser: function (type, value) {
        return new Promise ((resolve, reject) => {
            conn.query(USER[type], [value],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(res);
            }); 
        })            
    },
    ResetPassword : function (password, token) {
        return new Promise ((resolve, reject) => {
            conn.query(USER.ResetPassword, [password, token],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
    UpdateVerifToken : function (email, token) {
        return new Promise ((resolve, reject) => {
            conn.query(USER.UpdateToken, [token, email],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
    Confirmed: function (email){
        return new Promise ((resolve, reject) => {
            conn.query(USER.Confirmed, email,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
    notConfirmed: function (email){
        return new Promise ((resolve, reject) => {
            conn.query(USER.notConfirmed, email,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res); 
            });
        })
    },
    sendEmail : function (email, token){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sifeddineilyass@gmail.com',
                pass: 'tgsxcjeduwchxlim'
            }
        });
        const url = `http://localhost:3000/confirmation/${token}`;
        var mailOptions = {
            from: 'sifeddineilyass@gmail.com',
            to: email,
            subject: 'Confirm your account',
            html: `Please click to verify your email: <a href="${url}">${url}</a>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },
    sendResetEmail : function (email, token){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sifeddineilyass@gmail.com',
                pass: 'tgsxcjeduwchxlim'
            }
        });
        const url = `http://localhost:3000/resetPassword/${token}`;
        var mailOptions = {
            from: 'sifeddineilyass@gmail.com',
            to: email,
            subject: 'Reset your password',
            html: `Please click to reset your password: <a href="${url}">${url}</a>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },
    getOptions: function () {
        return new Promise ((resolve, reject) => {
            conn.query(INTERESTS.GetInterests,(err,res) => {
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
            conn.query(INTERESTS.CreateInterest, option, (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },
};