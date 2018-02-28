
var Grape = require('ps-grape');

var app = new Grape.grape(
	"../config/includes.json", 
	"../config/defaults.json", 
	"../../config.json"); 

var customworker = function(options, grape_app) {
	var self = this;
	this.self = self;

	this.logger = grape_app.logger;
	this.db = grape_app.db;

	this.start = function() {
		self.logger.info('CUSTOM WORKER STARTED WITH PID', process.pid.toString() , "!");
	};
};

app.addWorker({
	name: 'my-custom-worker',
	func: customworker
});

app.start();

