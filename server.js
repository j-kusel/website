const config = require('./config/config');
const configExpress = require('./config/express');

var app = configExpress();


app.listen(config.port);
