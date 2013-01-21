define(['jquery','backbone'], function($, Backbone) {

	var CardPlayer = Backbone.Model.extend({

		// Model Constructor
		initialize: function() {
			console.log('init CardPlayer..');
		},

		defaults: {
			currentIndex: 0,
			maxCards: 0
		},

		reset: function () {
			console.log('in CardPlayer reset..');
			this.set({
				currentIndex: 0,
				maxCards: 0
			});
		},

		nextSlide: function() {
			// console.log('next..', this.get('currentIndex'));
			var c = this.get('currentIndex') + 1;
			if (c > this.get('maxCards')) c = 1;
			this.set('currentIndex', c);
		},

		prevSlide: function() {
			var c = this.get('currentIndex') - 1;
			if (c < 1) c = this.get('maxCards');
			this.set('currentIndex', c);
		},

		loadCard: function(cardId) {
			console.log('cardId:', cardId);
		}

	});

	return CardPlayer;

});