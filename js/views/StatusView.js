define(['jquery','backbone'], function($, Backbone){

	var StatusView = Backbone.View.extend({

		el: $('#status'),

		initialize: function() {
			_.bindAll(this,'updateCounter');
			// this.collection.bind('reset', this.render, this);

			// this.cardPlayer = this.options.cardPlayer;
			// this.cardPlayer.bind('change:maxCards', this.maxCards); // dont need, just for testing..

			this.model.bind('change:maxCards', this.updateCounter);
			this.model.bind('change:currentIndex', this.updateCounter);
		},

		render: function() {
			$(this.el).html('dr');
			return this;
		},

		updateCounter: function() {
			$(this.el).html(this.model.get('currentIndex') + ' / ' + this.model.get('maxCards'));
		}

	});

	return StatusView;
});