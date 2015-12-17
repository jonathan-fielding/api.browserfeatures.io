var caniuse = require('caniuse-api');
var _ = require('lodash');

module.exports = {
	get: function(req, res, next) {
		var feature = req.params.feature;

		try {
		    var support = caniuse.getSupport(feature);
		    var parsedSupport = _.mapValues(support, function(value, key) {
				var response = {
					supported: false
				};

				if (value.y) {
					response.since = value.y;
					response.supported = true;
				}

				if (value.a) {
					response.partial_support = value.a;
				}

				if (value.x) {
					response.prefixed_until = value.x;
				}

				return response;
			});

			var response = {
				name: feature,
				browsers: parsedSupport,
				attribution: 'Licensed under CC BY 4.0 license from caniuse.com'
			};

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
};
