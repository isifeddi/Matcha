const IMAGES = require('../../models/images');

delImages = async (req, res) => {
    const data = req.body;
    const isProfilePic = data.isProfilePic;
    
    await IMAGES.delImages(data)
    .then((response) => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
    if(isProfilePic == 1)
    {
        await IMAGES.setFirstProfilePic(data)
        .catch((error) => {
            console.log(error);
        });
    }
};
module.exports = delImages;