var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'https://api.darksky.net',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/forecast/d10a145d31fba53f7a1b23fdb30964c6/37.8267,-122.4233', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})