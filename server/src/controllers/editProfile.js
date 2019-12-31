const tools = require('../tools');
const user = require('../models/user');

editProfile = async (req, res) => {
    const info = req.body;
    console.log(info);
    let v = false;
    let result = {
        valid: false,
        username : null,
        email : null,
        interests : null,
        password: null,
    };
    let CheckUsername = await  user.getUser('CheckEditUsername', [info.username, info.id]);
    let CheckEmail = await  user.getUser('CheckEditEmail', [info.email, info.id]);

    if(CheckUsername)
    {
        result.email = 'Email already exists';
    }
    if(CheckEmail)
    {
        result.username = 'Username already exists';
    }

    if(info.interests.length){
        const result = await user.checkInterests(info.interests)
        if(result[0].n !== info.interests.length)
            v = false;
        else
            v = true;
    }
    if(info.interests.length > 20){
        v = false;
        result.interests = 'You can not add more than 20 interests !';
        //res.send({ added:false, error: 'You can not add more than 20 interests !' });
        //return ;
    }

    if('password' in info ){
        if(tools.isPassword(info.password, info.confirmPassword)){
            let hashPassword = await bcrypt.hash(info.password, 10);
            user.update('UpdatePassword', [hashPassword, info.id]);
            v = true;
        }
        else
            v = false;
    }

    if(tools.isLastname(info.lastname) && tools.isFirstname(info.firstname) && tools.isUsername(info.username) && tools.isEmail(info.email) && tools.isBirthday(info.birthday) && tools.isGender(info.gender) && tools.isOrient(info.sexOrient) && tools.isBio(info.bio) && tools.isInterest(info.interests) && v)
    {
        user.deleteUserInter(info.id);
        user.update('UpdateProfile',[info.firstname, info.lastname, info.username, info.email, info.gender, info.birthday,  info.sexOrient, info.bio, info.id]);
        info.interests.forEach( element => {
            user.getInterId(element)
            .then(re => {
                if(re){
                    user.insertUserInter(info.id, re[0].interest_id);
                }
            })
            .catch(err => {
                console.log(err);
            })
        });
        const uu = await user.getUser('GetUserById',info.id);
        if(uu) delete uu.password;
        result.valid = true;
        res.send({ added: true , uu});
    }
    else
        result.valid = false
};

module.exports = editProfile;