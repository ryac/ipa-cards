// node ../../r.js -o app.build.js

({

	mainConfigFile: 'main.js',
	dir: '../../req-test-build',

	optimize: 'none',

	paths: {

	},

	modules: [
		//Optimize the application files. jQuery is not 
		//included since it is already in require-jquery.js
		{
			name: 'main'
		}
	]
})
