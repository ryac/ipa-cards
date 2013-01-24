requirejs.config({

	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone'
	},

	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}

});

require(['jquery','backbone','routers/IPARouter'], function($, Backbone, IPARouter) {
	// console.log('in main.js, calling IPARouter..');
	this.router = new IPARouter();
});
