define(['jquery','backbone'], function($, Backbone) {

	var User = Backbone.Model.extend({

		// Model Constructor
		initialize: function() {

		},

		defaults: {
			firstName: '',
			lastName: '',
			email: '',
			phone: ''
		}

	});

	return User;

});