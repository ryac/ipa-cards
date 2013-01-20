define(['jquery','backbone', 'models/Sound'], function($, Backbone, Sound) {

	var Sounds = Backbone.Collection.extend({

		// Collections Constructor
		initialize: function() {

		},

		model: Sound,
		url: 'data.json'

	});

	return Sounds;

});