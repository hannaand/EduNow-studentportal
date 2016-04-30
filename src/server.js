var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./api');

require('.././config/database');

app.use('/', express.static('public'));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(3000);
console.log('Server running on port 3000');