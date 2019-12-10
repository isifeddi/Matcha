const IMAGES = require('../../models/images');

getImages = async (req, res) => {
    const user_id = req.body.user_id;
    console.log(user_id);
    await IMAGES.getImages(user_id)
    .then((response) => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = getImages;