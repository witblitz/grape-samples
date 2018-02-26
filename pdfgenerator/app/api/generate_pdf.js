module.exports = function() {
	return function(req, res) {
		var options = {
			documentType: 'demo_document',
			baseFileName: 'Demo',
			funcName: 'demo.create_xml',
			funcParams: [ /* add parameters to be sent to the db function here */],
			res: res,
			xslName: 'demo.xsl'
		};
		
		req.app.get('pdfgenerator').generate_and_stream_xml(options);
	};
};
