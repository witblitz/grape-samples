'use strict';

(function() {

//Instantiate Page Variables 
var TablePageViewModel = function(page)
{
	var self = this;
	self.page = page;
}

//Handle interaction with page 
var TablePage = function(bindings) {
	var self = this;
	this.self = self;
	this.bindings = bindings;
	this.viewModel = new TablePageViewModel(this);
	this.name = 'TablePage';

	//Event (Post/After): Load once
	this.init = function() {

		var actions_formatter = function(value, row, index) {
			var ret = [
				'<a class="download" title="Download" href="javascript:void(0)">',
				'<i class="fa fa-download" style="color: #77C4D3"></i>',
				'</a>&emsp;'
			].join('');

			return ret;
		};
		var actions_events = {
			'click .download': function(e, value, row, index) {
			}
		};


		//COMPONENT: Bootstrap Table
		self.tbl_table = $("#tbl_table").bootstrapTable({
			tablename: 'tablename',	// CHANGE THIS
			schema: 'schemaname',	// CHANGE THIS

			columns: [
				{field: '', title: '', sortable: true, width: ''},
				{
					field: 'action', 
					width: '100px', 
					align: 'right', 
					title: 'Actions', 
					formatter: actions_formatter, 
					events: actions_events
				}
			],

			dataField: 'records',

			//TABLE PROPERTIES: Paging
			pagination: true,
			pageList: [20, 50, 100],
			pageSize: 20,
			sidePagination: 'server',
			onPageChange: function(number, size) {
				self.updateData();
			},

			//TABLE PROPERTIES: Sort
			// sortOrder: 'asc',
			// sortName: 'user_id',
			onSort: function(sortName, sortOrder) {
				self.updateData();
			},

			//TABLE PROPERTIES: Search
			search: true,
			searchOnEnterKey: true,
			onSearch: function(text) {
				self.updateData();
			}
		});

	};

	//Event (Post/After): Refresh page data
	this.updateData = function() {

		var options = $("#tbl_table").bootstrapTable('getOptions');

		//SERVER: api call to grape to retrieve data from db regarding request params set above
		Grape.list_query(options, 
			function(result) {
				$("#tbl_table").bootstrapTable('load', result);
		});

	};

	//Event (Pre/Before): Remove 
	this.teardown = function() {
	};

};

//Assign Page(HTML/JS) to Grape
window.Grape.route('[/]{{path}}', {
	page_class: TablePage,
	file: __DIRNAME__ + '/{{filename}}.html'
});

})();
