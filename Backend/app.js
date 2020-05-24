const express = require('express');
var cors = require('cors')
const app = express();


require('./config/express')(app);
require('./config/routes')(app);

module.exports = app;
