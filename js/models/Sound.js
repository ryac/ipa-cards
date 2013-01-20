define(['jquery','backbone'], function($, Backbone) {

	var Sound = Backbone.Model.extend({

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

	return Sound;

});