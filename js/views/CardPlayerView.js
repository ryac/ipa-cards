define(['jquery','backbone'], function($, Backbone){

	var CardPlayerView = Backbone.View.extend({

		el: $('#nav-controls'),

		initialize: function() {
			_.bindAll(this, 'maxCards');
			this.collection.bind('reset', this.render, this);

			this.cardPlayer = this.options.cardPlayer;
			this.cardPlayer.bind('change:maxCards', this.maxCards); // dont need, just for testing..
		},

		events: {
			'click .btn-prev': 'cardPrev',
			'click .btn-next': 'cardNext',
		},

		render: function() {
			this.cardPlayer.set('maxCards', this.collection.length);
			this.collection.shuffle();
			console.log(this.collection.at(0).get('symbol'));
			this.cardPlayer.loadCard(1880);
			// console.log(this.collection.length);
			// $(this.el).append('<p>hi</p>');
			return this;
		},

		cardNext: function() {
			this.cardPlayer.nextSlide();
		},

		cardPrev: function() {
			this.cardPlayer.prevSlide();
		},

		maxCards: function(u) {
			// console.log('whoo!', u.get('maxCards'));
			console.log('whoo!', this.cardPlayer.get('maxCards'));
		}

	});

	return CardPlayerView;
});