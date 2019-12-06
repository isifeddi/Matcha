const common = require('../../models/common');

getOptions = async (req, res) => {
    await common.getOptions()
    .then((response) => {
        let options = [];
        Object.keys(response).forEach(function() {
            for (var i = 0; i < response.length; i++) {
                options[i] = {
                  value: response[i].interest,
                  label: response[i].interest,
                };
            }
        });
        res.send(options);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = getOptions;