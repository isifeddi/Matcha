const tools = require('../tools');
const user = require('../models/user');

addInfo = async (req, res) => {
    const info = req.body;
    let v = false;
    if(info.interests.length){
        const result = await user.checkInterests(info.interests)
        if(result[0].n !== info.interests.length)
            v = false;
        else 
            v = true;
    }
    if(tools.isBirthday(info.birthday) && tools.isGender(info.gender) && tools.isOrient(info.sexOrient) && tools.isBio(info.bio) && tools.isInterest(info.interests) && v){
        user.updateInfo(info.gender, info.sexOrient, info.birthday, info.bio);
        
        res.send({ added:true });
    }
    else
        res.send({ added:false });
};

module.exports = addInfo;