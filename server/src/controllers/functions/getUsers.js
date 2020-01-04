const user = require('../../models/user');
const img = require('../../models/images');

getUsers = async (req, res) => {
   
    const user_id = req.body.id;
    const us = await user.select('GetUserById',user_id);
   
    const Data = [];
    const users = await user.getUsers(user_id);
    // for (var i = 0; i < users.length; i++) {
    //     if(us[0].rating - 1  >  users[i].rating || us[0].rating + 1 < users[i].rating )
    //     {
    //         users.splice(i, 1);
    //     }
    // }

    for (var i = 0; i < users.length; i++) {
        if(us[0].sexOrient === 'men')
        {
            if(users[i].sexOrient === 'women')
            {
                users.splice(i, 1);
            }
        }
        else if(us[0].sexOrient === 'women')
        {
            if(users[i].sexOrient === 'men')
            {
                users.splice(i, 1);
            }
        }
    }
    for (var i = 0; i < users.length; i++) {
        const images = await img.getImages(users[i].id);
        const interests  = await user.getUserInterests(users[i].id); 
        Data[i]= {
         user :  users[i],
         images : images,
         interests: interests
        }
    }
   res.send(Data);
    
};

module.exports = getUsers;