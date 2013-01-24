define(['jquery', 'backbone'], function ($, Backbone) {

	var StatusView = Backbone.View.extend({

		el: $('#status'),

		initialize: function () {
			_.bindAll(this, 'updateCounter');

			// this.model.bind('change:maxCards', this.updateCounter);
			this.model.bind('change:currentIndex', this.updateCounter);
		},

		render: function () {
			return this;
		},

		updateCounter: function () {
			$(this.el).html((this.model.get('currentIndex') + 1) + ' / ' + this.model.get('maxCards'));
		}

	});

	return StatusView;
});