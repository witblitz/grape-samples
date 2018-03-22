
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


	this.start = function(done) {
		self.logger.info('CUSTOM WORKER STARTED WITH PID', process.pid.toString() , "!");
		done();
	};
	this.shutdown = function(done) {
		done();
	};
};

app.addWorker({
	name: 'my-custom-worker',
	func: customworker
});

app.on('my-custom-worker-beforestart', function(worker_def, worker) {
	console.log("Custom worker is going to start now!");
});
app.on('my-custom-worker-afterstart', function(worker_def, worker) {
	console.log("Custom worker has started!");
});


app.start();

