var PORT = process.env.PORT || 3000;
var chalk = require('chalk');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sinch = require('./sinch');
var sinchSms = require('sinch-messaging');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send("At root");
});

var rand;
app.post('/sinchtest', function(req, res) {
    rand = Math.floor(Math.random() * 90000) + 10000;
    var cCode = req.body.countryCode;
    var mobNumber = req.body.number;
    var Fnumber = '+' + cCode + mobNumber;
    console.log(Fnumber);
    sinch.sendSMS(Fnumber, 'Your one time password is ' + rand);

});

app.post('/verifyotp', function(req, res) {
    var pin = req.body.code;
    console.log(pin);
    console.log(rand);

    if (pin == rand) {
        console.log("success");
        res.sendFile(__dirname + '/public/success.html');
    } else {
        console.log("invalid pin");
        res.sendFile(__dirname + '/public/invalid.html');

    }
});




app.listen(PORT, function() {
    console.log(chalk.blue("listening at " + PORT));
});









