var caniuse = require('caniuse-api');
var BROWSER_REGEX = new RegExp(/([a-z]){1,100}([0-9]){1,2}/g);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
	get: function(req, res, next) {
		var browser = req.params.browser;

		var features = caniuse.find('');
		var browserName = browser.replace(/([a-z]{1,100})([0-9]{1,2})/g, function(match, browser, number){
			return browser + ' ' + number;
		});

		try {
			var avaliable = features.filter(function(feature){
				return caniuse.isSupported(feature, browserName);
			});

			var response = {
				name: capitalizeFirstLetter(browserName),
				slug: browser,
				features: avaliable,
				attribution: 'Licensed under CC BY 4.0 license from caniuse.com'
			};
		
			res.status(200).json(response);
		}
		catch(err) {
			res.status(404).json({
				error: 'browser not found'
			});
		}
	}
};