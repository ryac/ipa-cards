define(['jquery','backbone'], function($, Backbone) {

	var Card = Backbone.Model.extend({

		// Model Constructor
		initialize: function() {

		},

		defaults: {
			symbol: '',
			place: '',
			manner: '',
			voice: '',
			audio: '',
			more: ''
		}

	});

	return Card;

});