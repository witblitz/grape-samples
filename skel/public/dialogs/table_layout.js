"use scrict";
(function() {


var DialogViewModel = function(page)
{
	var self = this;
	self.page = page;

	// KNOCKOUT OBSERVABLES GOES HERE
	this.some_input = ko.observable();
}

var DialogClass = function(bindings) // bindings here will contain the data sent via Grape.show_dialog(name, data, options)
{
	var self = this;
	this.self = self;
	this.bindings = bindings;
	this.viewModel = new DialogViewModel(this); // Name of the ViewModel defined above
	this.name = 'NewDialog'; // Unique dialog name

	this.init = function() {
	};

	this.onClose = function() { 
	};

	this.btnclose = function() {
		self.close(false);
	};
}

//Register the dialog
window.Grape.dialogs['DialogName'] = {
	pageClass: DialogClass,
	file: __DIRNAME__ + '/dialog.html'
};

})();
