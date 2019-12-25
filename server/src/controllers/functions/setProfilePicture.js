const IMAGES = require('../../models/images');

setProfilePicture = async (req, res) => {
    const data = req.body;
    //console.log(data.imgId)
     IMAGES.setProfilePic(data)
    .then((response) => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = setProfilePicture;