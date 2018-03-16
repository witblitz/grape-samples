'use strict';

(function() {

//Instantiate Page Variables 
var DemoPageViewModel = function(page)
{
	var self = this;
	self.page = page;

	this.attachments = ko.observableArray();
	this.templates = ko.observableArray(['red', 'blue']);
	this.email = ko.observable('');
	this.template = ko.observable();
	this.name = ko.observable('');
}

//Handle interaction with page 
var DemoPage = function(bindings) {
	var self = this;
	this.self = self;
	this.bindings = bindings;
	this.viewModel = new DemoPageViewModel(this);
	this.name = 'EmailsPage';

	//Event (Post/After): Load once
	this.init = function() {
		document.title = "Email Page";
	};

	//Event (Post/After): Refresh page data
	this.updateData = function() {
		$.getJSON('/list_attachments', {}, function(d) { 
			if (d.status == "ERROR")
			{
				Grape.alert_api_error(d);
				return;
			}
			self.viewModel.attachments(d.files);
		});
	};

	//Event (Pre/Before): Remove 
	this.teardown = function() {
	};

	this.file_uploaded = function(res) {
		console.log(res);
		Grape.alert({type: 'success', title: 'Success', message: 'File uploaded!'});

		self.updateData();
	};

	this.send = function() {
		
		var obj = {
			templatename: self.viewModel.template(),
			recipient: self.viewModel.email(),
			name: self.viewModel.name()
		};

		if (obj.recipient == '' || obj.name == '')
		{
			Grape.alert({type: 'warning', title: 'Missing fields', message: 'You have to fill in recipient and name fields!'});
			return;
		}

		$.postJSON("/send_attachments", obj, function(d) { 
			if (d.status == "ERROR")
			{
				Grape.alert_api_error(d);
				return;
			}
		
			Grape.alert({type: 'success', title: 'Success', message: 'Email added to queue!'});
		});
	};
};

//Assign Page(HTML/JS) to Grape
window.Grape.route('[/]emails', {
	page_class: DemoPage,
	file: __DIRNAME__ + '/emails.html'
});

})();
