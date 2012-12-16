// node ./r.js -o app.build.js

({

	appDir: '../',
	baseUrl: 'js/',
	mainConfigFile: 'main.js',
	dir: '../../req-test-build',

	optimize: 'uglify',

	paths: {
		
	},

	modules: [{
		name: 'main'
	}]
})
