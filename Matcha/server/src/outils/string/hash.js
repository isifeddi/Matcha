const cryptto = require("crypto")

const sha512 = (password, salt) =>{
    const hash = crypto.createHamc('sha512', salt)
    hash.update(password)
    return hash.digest('hex')
}

module.exports = sha512
