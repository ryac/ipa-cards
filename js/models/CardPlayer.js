define(['jquery', 'backbone'], function ($, Backbone) {

	'use strict';

	var CardPlayer = Backbone.Model.extend({

		// Model Constructor
		initialize: function () {
			// console.log('init CardPlayer..');
		},

		defaults: {
			currentIndex: null,
			maxCards: null
		},

		reset: function () {
			console.log('in CardPlayer reset..');
			this.set({
				currentIndex: null,
				maxCards: null
			});
		},

		init: function (mCards) {
			this.set('maxCards', mCards);
			this.set('currentIndex', 0); // triggers an event in status, initial value is null to trigger the event..
		},

		nextSlide: function () {
			// console.log('next..', this.get('currentIndex'));
			var c = this.get('currentIndex') + 1;
			if (c >= this.get('maxCards')) {
				c = 0;
			}
			this.set('currentIndex', c);
		},

		prevSlide: function () {
			var c = this.get('currentIndex') - 1;
			if (c < 0) {
				c = this.get('maxCards') - 1;
			}
			this.set('currentIndex', c);
		}

	});

	return CardPlayer;

});