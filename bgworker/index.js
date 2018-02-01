
var grape = require('ps-grape').grape;

var app = new grape(
	"defaults.json", 
	"../config.json"
);

app.start();

