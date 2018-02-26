
var Grape = require('ps-grape');

var app = new Grape.grape(
	"../config/includes.json", 
	"../config/defaults.json", 
	"../../config.json"); 

app.start();


