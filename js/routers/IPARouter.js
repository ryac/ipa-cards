define(['jquery','backbone','models/CardPlayer','collections/Cards','views/CardPlayerView','views/StatusView','views/CardView'], function($, Backbone, CardPlayer, Cards, CardPlayerView, StatusView, CardView) {
	var IPARouter = Backbone.Router.extend({
		
		initialize: function() {
			Backbone.history.start();
		},

		routes: {
			'': 'main'
		},

		main: function() {
			// console.log('in IPARouter main..');

			// single model..
			this.cardPlayer = new CardPlayer();

			// the collection..
			this.cards = new Cards();

			// the container view..
			this.cardPlayerView = new CardPlayerView({
				collection: this.cards,
				cardPlayer: this.cardPlayer
			});

			this.cardView = new CardView({
				collection: this.cards,
				cardPlayer: this.cardPlayer
			});

			// the view for the status bar..
			this.statusView = new StatusView({ model: this.cardPlayer });

			this.cards.fetch();

		}

	});

	return IPARouter;
});