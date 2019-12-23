const user = require('../../models/user');
const axios = require('axios');

getLocation = async (req, res) => {
    //const id = req.body.id;
    axios.get('http://ipinfo.io/json')
    .then(resp => {
        const arr = resp.data.loc.split(",");
        const loc = {lat: parseFloat(arr[0]), lng: parseFloat(arr[1])}
        res.send(loc)
    })
    .catch(err => res.send(err));
};
module.exports = getLocation;