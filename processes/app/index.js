
var grape = require('ps-grape').grape;

var app = new grape(
	"../config/defaults.json", 
	"../config.json"
);

app.start();

