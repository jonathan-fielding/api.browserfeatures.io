var caniuse = require('caniuse-api')

function BrowsersController() {
}

BrowsersController.prototype = {
	get: function(req, res, next) {
		var browsers = caniuse.getLatestStableBrowsers();

		var response = {
			browsers: browsers,
			attribution: 'Licensed under CC BY 4.0 license from caniuse.com'
		}

		res.status(200).json(response);
	}
};

var browsersController = new BrowsersController();

module.exports = browsersController;
