define(['jquery','backbone'], function($, Backbone){

	var Card = Backbone.View.extend({

		template: _.template($('#card-tmplt').html()),

		initialize: function() {

		},

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}

	});

	return Card;
});