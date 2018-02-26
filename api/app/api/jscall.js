module.exports = function() {
	return function(req, res) {
		res.json({"status":"OK","message":"Message from JS call!"});
		res.end();
	}
}
