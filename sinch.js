var sinchAuth = require('sinch-auth')
sinchSms = require('sinch-messaging')
auth = sinchAuth("ACC_SID", "AUTH_Token");
sinch = {}

sinch.sendSMS = function(number, message) {
    sinchSms.sendMessage(number, message)
}

module.exports = sinch;
