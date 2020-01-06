const user = require('../../models/user');
const calculateNbrTagsCommun = async (user1,user2) =>{

    const interestsU1  = await user.getUserInterests(user1.id);
    const interestsU2  = await user.getUserInterests(user2.id);
    //console.log(interestsU1[0].value)
    let nbrTagsComm = 0;
    if(interestsU1 === null || interestsU2 === null)
        return 0;
        for (var i = 0; i < interestsU1.length; i++) {
            for (var j = 0; j < interestsU2.length; j++) {
                if(interestsU1[i].value === interestsU2[j].value)
                    nbrTagsComm++;
            }
        }
        return nbrTagsComm;
}

module.exports = calculateNbrTagsCommun