const common = require('../../models/common');

createOption = async (req, res) => {
    const option = req.body.option;
    if(option.length < 20)
    {
        common.createOption(option);
        res.send({created: true, option: {value: option, label: option}})
    }
    else
        res.send({created: false, error: 'max 20 characters'})
};

module.exports = createOption;