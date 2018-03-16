
module.exports = function() {
	return function(req, res) {
		if (!req.files || !req.files.document)
		{
			res.json({status: 'ERROR', message: 'Missing fields'}).end();
			return;
		}

		var ds = req.app.get('ds');

		var file = req.files.document;
		ds.saveFile('files', file.path, file.originalFilename, false);

		res.json({status: 'OK'}).end();
	};
};

