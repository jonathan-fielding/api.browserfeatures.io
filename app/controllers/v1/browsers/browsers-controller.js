var caniuse = require('caniuse-api')

module.exports = {
	get: function(req, res, next) {
		var browserData = caniuse.getLatestStableBrowsers();
		var joinedBrowsers = browserData.join(',');

		var response = {
			browsers: {
				chrome: joinedBrowsers.match('chrome ([0-9\.]{1,3})') && joinedBrowsers.match('chrome ([0-9\.]{1,3})')[1],
				edge: joinedBrowsers.match('edge ([0-9\.]{1,3})') && joinedBrowsers.match('edge ([0-9\.]{1,3})')[1],
				ie: joinedBrowsers.match('ie ([0-9\.]{1,3})') && joinedBrowsers.match('ie ([0-9\.]{1,3})')[1],
				ie_mob: joinedBrowsers.match('ie_mob ([0-9\.]{1,3})') && joinedBrowsers.match('ie_mob ([0-9\.]{1,3})')[1],
				ios_saf: joinedBrowsers.match('ios_saf ([0-9\.]{1,3})') && joinedBrowsers.match('ios_saf ([0-9\.]{1,3})')[1],
				firefox: joinedBrowsers.match('firefox ([0-9\.]{1,3})') && joinedBrowsers.match('firefox ([0-9\.]{1,3})')[1],
				opera: joinedBrowsers.match('opera ([0-9\.]{1,3})') && joinedBrowsers.match('opera ([0-9\.]{1,3})')[1],
				safari: joinedBrowsers.match('safari ([0-9\.]{1,3})') && joinedBrowsers.match('safari ([0-9\.]{1,3})')[1]
			},
			attribution: 'Licensed under CC BY 4.0 license from caniuse.com'
		};

		res.status(200).json(response);
	}
};