const isEmpty = require("./empty/isEmpty")


const isDigit = require("./string/isDigit")
const hash = require("./string/hash")
const isLowercase = require("./string/isLowercase")
const isUppercase = require("./string/isUppercase")
const isSpecial = require("./string/isSpecial")
const isAlpha = require("./string/isAlpha")
const isAlphaNumeric =  require("./string/isAlphaNumeric")
const isNumeric = require("./string/isNumeric")
const isFloat = require("./string/isFloat")
const random = require("./string/random")

const isUsername = require("./user/isUsername")
const isEmail = require("./user/isEmail")
const isbirthday = require("./user/isBirthday")
const age = require("./user/AgeFromDate")
const isFirstname = require("./user/isFirstname")
const isLastname = require("./user/isLastname")
const isPassword = require("./user/isPassword")
const isProfileComplete = require("./user/isProfileComplete")

module.exports = {
    isEmpty, isDigit, hash, isLowercase, isUppercase, isSpecial,
    isAlpha, isAlphaNumeric, isNumeric, isFloat, random, isUsername,
    isEmail, isbirthday, age, isFirstname, isLastname, isPassword,
    isProfileComplete
}
