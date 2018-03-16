'use strict';

(function() {

//Instantiate Page Variables 
var DemoPageViewModel = function(page)
{
	var self = this;
	self.page = page;
}

//Handle interaction with page 
var DemoPage = function(bindings) {
	var self = this;
	this.self = self;
	this.bindings = bindings;
	this.viewModel = new DemoPageViewModel(this);
	this.name = 'DemoPage';

	//Event (Post/After): Load once
	this.init = function() {
		document.title = "Demo Page";
	};

	//Event (Post/After): Refresh page data
	this.updateData = function() {

	};

	//Event (Pre/Before): Remove 
	this.teardown = function() {
	};

};

//Assign Page(HTML/JS) to Grape
window.Grape.route('[/]page', {
	page_class: DemoPage,
	file: __DIRNAME__ + '/page.html'
});

})();
