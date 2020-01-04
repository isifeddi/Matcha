const user = require('../../models/user');

const rating =  (type) =>{
    user.select('GetAllUsers')
    .then((response) => {
        const length = response.length;
        if(type === 'like')
        {
            return (2 / length);
        }
        else if(type === 'dislike')
        {
            return -(2 / length);
        }
        else if(type === 'block')
        {
            return -(1 / length);
        }
        else if(type === 'report')
        {
            return -(1 / length);
        }

    
         
        
    }).catch((error) => {
        console.log(error);
    });

   
    
    
   
}

module.exports = rating