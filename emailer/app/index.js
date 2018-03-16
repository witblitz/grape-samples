
var Grape = require('ps-grape');

var app = new Grape.grape('../config/defaults.json', '../../config.json');

console.log(app.options);

app.start();

