
var Grape = require('ps-grape');
var GrapeEmailListener = require('grape-email-sender');

var app = new Grape.grape('../config/defaults.json', '../../config.json');

console.log(app.options);

app.addWorker({
	name: 'emailer',
	func: GrapeEmailListener
});

app.start();

