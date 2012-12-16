requirejs.config({

	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone'
	},

	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'backbone'
		}
	}

});

require(['jquery','backbone','routers/DesktopRouter'], function($, Backbone, DesktopRouter) {
	console.log('in main.js, calling DesktopRouter..');
	this.router = new DesktopRouter();
});
