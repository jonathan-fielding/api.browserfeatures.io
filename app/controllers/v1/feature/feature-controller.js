var caniuse = require('caniuse-api')


function FeatureController() {
}


FeatureController.prototype = {
	get: function(req, res, next) {
		var feature = req.params.feature;
		var support = caniuse.getSupport(feature)

		var response = {
			name: feature,
			browsers: support,
			attribution: 'Licensed under CC BY 4.0 license from caniuse.com'
		}

		res.status(200).json(response);
	}
};

var featureController = new FeatureController();

module.exports = featureController;
