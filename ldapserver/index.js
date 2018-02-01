
var grape = require('ps-grape').grape;
var grape_sms_server = require('grape-sms-server');
var grape_nxtsms_provider = require('grape-nxtsms-provider');

var app = new grape(
	"defaults.json", 
	"../config.json"
);

app.addWorker({
	name: 'smsserver',
	func: grape_sms_server
});

app.on('worker-smsserver', function(def, sms_server) {
	var nxtsms = new grape_nxtsms_provider(app.options);
	sms_server.provider = nxtsms;
});

app.start();

