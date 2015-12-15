var caniuse = require('caniuse-api')

module.exports = {
	get: function(req, res, next) {
		var feature = req.params.feature;

		try {
		    var support = caniuse.getSupport(feature)

			var response = {
				name: feature,
				browsers: support,
				attribution: 'Licensed under CC BY 4.0 license from caniuse.com'
			}

			res.status(200).json(response);
		}
		catch (err) {
			var closest = caniuse.find(feature);

			res.status(404).json({
				error: 'api not found',
				suggestions: closest
			});
		}
	}
}
