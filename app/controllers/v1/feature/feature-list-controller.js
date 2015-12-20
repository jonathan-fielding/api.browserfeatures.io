var caniuse = require('caniuse-api');
var _ = require('lodash');

module.exports = {
	get: function(req, res, next) {
		var avaliable = caniuse.find('');

		res.status(200).json({
			features: avaliable,
			attribution: 'Licensed under CC BY 4.0 license from caniuse.com'
		});
	}
};
