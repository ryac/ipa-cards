define(['jquery', 'backbone', 'models/Card'], function ($, Backbone, Card) {

	'use strict';

	var Cards = Backbone.Collection.extend({

		// Collections Constructor
		initialize: function () {

		},

		// reset: function() {
		// console.log('Cards reset..');
		// },

		model: Card,
		url: 'data.json'

	});

	return Cards;

});