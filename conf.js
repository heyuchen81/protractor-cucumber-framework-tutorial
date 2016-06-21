//conf.js
exports.config = {
	// set to "custom" instead of cucumber.
	framework: 'custom',
	
	// path relative to the current config file
	frameworkPath: require.resolve('protractor-cucumber-framework'),

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs : [ './features/*.feature' ],
	
	  capabilities: {
	    browserName: 'chrome'
	  },
	
	baseUrl: 'https://www.npmjs.com/package/protractor-cucumber-framework',

	cucumberOpts: {
		require: './features/step_definitions/*.js',
		tags: '@dev',
		format: 'progress',
		profile: false,
		'no-source': true
	}
}