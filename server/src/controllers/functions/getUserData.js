const user = require('../../models/user');

getUserData = async (id) => {
    // const id = req.body.id;
    let get = await  user.getUser('GetUserById',id);
    const data = get[0];
    const inter = await user.getUserInterests(id);

    if(data){
        const userData = {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            email: data.email,
            confirmed: data.confirmed,
            gender: data.gender,
            sexOrient: data.sexOrient,
            bio: data.bio,
            birthday: data.transDate,
            interests: inter,
        }
        return (userData);
    }
};

module.exports = getUserData;