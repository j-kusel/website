const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = () => {
    var app = express();
    app.use(morgan('dev'));
    app.use(express.static('build'));
    app.use(express.static('public'));

    return app;
}
