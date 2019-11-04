const isEmpty = require('../empty/isEmpty')

const isBirthday = (date) => {
    if(isEmpty(date)) return false
    if(date.length !== 'YYY-MM-DD'.length || date.split('-').length !== 3) return false
    const age = Age(date)
    if(isEmpty(age) || age < 18 || age > 30) return false
    return true
}

module.exports = isBirthday
