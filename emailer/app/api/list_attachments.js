
const fs = require('fs');

module.exports = function() {
	return function(req, res) {
		var ds = req.app.get('ds');
		fs.readdir(ds.getDirectory('files', false), function(err, files) {
			if (err)
			{
				res.json({status: 'ERROR', error: err}).end();
				return;
			}

			res.json({status: 'OK', files: files}).end();
		});
	};
};

