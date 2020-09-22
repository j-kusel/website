const config = require('./config');
const configExpress = require('./config/express');

var app = configExpress();


app.listen(config.port);
