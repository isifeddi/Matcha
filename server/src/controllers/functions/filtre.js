const calculateScore = require('./calculateScore');
const calculateDistance = require('./calculateDistance');
const calculateNbrTagsCommun = require('./calculateNbrTagsCommun');
const user = require('../../models/user');
const so = require('./sort');
const filtreUsers = async (user_id,fil) => {
    let user2 = '';
    let SorteTabe = '';
    const filtre = findFilter(fil);
    const user1 = await user.select('GetUserById',user_id);
    const users = await user.getUsers(user_id);
    for (var i = 0; i < users.length; i++) {
        if(user1[0].sexOrient === 'men')
        {
            if(users[i].gender === 'female')
            {
                users.splice(i, 1);
                i--;
            }
        }
        else if(user1[0].sexOrient === 'women')
        {
            if(users[i].gender === 'male')
            {
                users.splice(i, 1);
                i--;
            }
        }
    }
    if(filtre === null || (filtre.tags === null && filtre.rating === null && filtre.age === null && filtre.loc === null))
    {
       for (var i = 0; i < users.length; i++) {
       user2 = {
           distance : calculateDistance(user1[0],users[i]),
           nbrTags : await calculateNbrTagsCommun(user1[0],users[i]),
           rating : users[i].rating,
           online : users[i].isOnline
       }
       users[i].score = calculateScore(user2);
     }
        SorteTabe = users.sort(so('-score')); 
    }
   else{
       if(filtre.tags !== null)
       {
        for (var i = 0; i < users.length; i++){
            users[i].nbrTagsCom = await calculateNbrTagsCommun(user1[0],users[i]);

            if( users[i].nbrTagsCom < filtre.tags.min || users[i].nbrTagsCom > filtre.tags.max)
            {
                    users.splice(i, 1);
                    i--;
            }
        }
         SorteTabe = users.sort(so('nbrTagsCom')); 
       } 
       if(filtre.rating !== null)
       {
           for (var i = 0; i < users.length; i++){
                if(users[i].rating < filtre.rating.min || users[i].rating > filtre.rating.max)
                {
                        users.splice(i, 1);
                        i--;
                }
            }
             SorteTabe = users.sort(so('-rating')); 
       } 
       if(filtre.age !== null)
       {
        for (var i = 0; i < users.length; i++){
            if(users[i].birthday < filtre.age.min || users[i].birthday > filtre.age.max)
            {
                    users.splice(i, 1);
                    i--;
            }
        }
         SorteTabe = users.sort(so('-birthday')); 
       } 
       if(filtre.loc !== null)
       {
        for (var i = 0; i < users.length; i++){
            users[i].distance = calculateDistance(user1[0],users[i]);

            if( users[i].distance < filtre.loc.min || users[i].distance > filtre.loc.max)
            {
                    users.splice(i, 1);
                    i--;
            }
        }
         SorteTabe = users.sort(so('distance')); 
       } 
   }
    console.table(SorteTabe)
    return SorteTabe;
}
const findFilter = (filtre) =>{
    if(filtre === null)
        return null;
    let data = {
        tags : null,
        rating : null,
        age : null,
        loc : null
    }
    if(filtre.tags[0] !== 0 || filtre.tags[1] !== 0)
        data.tags = {min : filtre.tags[0],max : filtre.tags[1]}
    if(filtre.rating[0] !== 0 || filtre.rating[1] !== 0)
        data.rating = {min : filtre.rating[0],max : filtre.rating[1]}
    if(filtre.age[0] !== 18 || filtre.age[1] !== 18)
        data.age = {min : filtre.age[0],max : filtre.age[1]}
    if(filtre.loc[0] !== 0 || filtre.loc[1] !== 0)
        data.loc = {min : filtre.loc[0],max : filtre.loc[1]}
    return data;
        
}

module.exports = filtreUsers;