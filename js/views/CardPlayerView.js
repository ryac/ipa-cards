define(['jquery','backbone'], function($, Backbone){

	var CardPlayerView = Backbone.View.extend({

		el: $('#nav-controls'),

		initialize: function() {
			// _.bindAll(this, 'updateCard');
			this.collection.bind('reset', this.render, this);

			this.cardPlayer = this.options.cardPlayer;
			// this.cardPlayer.bind('change:currentIndex', this.updateCard);
		},

		events: {
			'click .btn-prev': 'cardPrev',
			'click .btn-next': 'cardNext'
		},

		render: function() {
			// this.cardPlayer.set('maxCards', this.collection.length);
			this.collection.models = _.shuffle(this.collection.models);
			this.cardPlayer.init(this.collection.length);
			// console.dir(this.collection.models);
			// console.log(this.collection.length);
			// $(this.el).append('<p>hi</p>');
			return this;
		},

		cardNext: function(e) {
			e.preventDefault();
			this.cardPlayer.nextSlide();
		},

		cardPrev: function(e) {
			e.preventDefault();
			this.cardPlayer.prevSlide();
		},

		updateCard: function() {
			console.log('whoo!', this.cardPlayer.get('currentIndex'));
		}

	});

	return CardPlayerView;
});