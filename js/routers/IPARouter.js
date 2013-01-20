define(['jquery','backbone','collections/Sounds'], function($, Backbone, Sounds) {
	var IPARouter = Backbone.Router.extend({
		
		initialize: function() {
			Backbone.history.start();
		},

		routes: {
			'': 'main'
		},

		main: function() {
			console.log('in IPARouter main..');

			this.sounds = new Sounds(); // the collection..
			this.sounds.fetch();

		}

	});

	return IPARouter;
});