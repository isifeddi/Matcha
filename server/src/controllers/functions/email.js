var nodemailer = require('nodemailer');
module.exports = {
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
};