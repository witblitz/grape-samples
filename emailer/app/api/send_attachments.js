
const fs = require('fs');
const path = require('path');

module.exports = function() {
	return function(req, res) {
		var ds = req.app.get('ds');
		var file_directory = ds.getDirectory('files', false);
		fs.readdir(file_directory, function(err, files) {
			var attachments = [];

			files.forEach(function(f) {
				attachments.push(path.join(file_directory, f));
			});

			var obj = {
				to: req.body.recipient,
				template: req.body.templatename,
				template_data: {
					name: req.body.name
				},
				headers: {
					attachments: attachments
				}
			};

			res.locals.db.json_call('grape.send_email', obj, null, {response: res});
		});

	};
};

