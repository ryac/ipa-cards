define(['jquery','backbone','models/UserModel','views/UserView'], function($, Backbone, UserModel, UserView) {
	var Router = Backbone.Router.extend({
		
		initialize: function() {
			Backbone.history.start();
		},

		routes: {
			'': 'home'
		},

		home: function() {
			console.log('in home..');
		}

	});

	return Router;
});