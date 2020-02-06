const user = require('../../models/user');

getNotif = async (req, res) => {
    const user_id = req.body.user_id;
    user.select('getNotif', user_id)
    .then( async (resp) => {
        let arr = [];
        if(resp){
            for (var i = 0; i < resp.length; i++) {
                const interests = await user.select('GetUserInter', resp[i].id);
                const images = await user.select('GetImages', resp[i].id);
                arr.push({
                    by:{firstname: resp[i].firstname,
                        lastname: resp[i].lastname,
                        username: resp[i].username,
                        sexOrient: resp[i].sexOrient,
                        bio: resp[i].bio,
                        age: resp[i].age,
                        rating: resp[i].rating,
                        isOnline: resp[i].isOnline,
                        lastSignIn: resp[i].lastSignIn,
                        profilePic: resp[i].profilePic,
                        interests: interests,
                        images: images,
                    },
                    content:  resp[i].content,
                    seen: resp[i].seen
                });
            }
            res.send(arr);
        }
    })
};
module.exports = getNotif;