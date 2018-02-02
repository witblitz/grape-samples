
var grape = require('ps-grape').grape;
var grape_ldap_server = require('grape-ldap-server');

var app = new grape(
	"defaults.json", 
	"../config.json"
);

app.addWorker({
	name: 'ldap',
	func: grape_ldap_server
});

app.on('worker-ldap', function(def, ldap_server) {
});

app.start();

