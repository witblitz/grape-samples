
var Grape = require('ps-grape');

var app = new Grape.grape('base.json', 'config.json');

console.log(app.options);

app.start();

