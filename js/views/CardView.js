define(['jquery','backbone'], function($, Backbone){

	var CardView = Backbone.View.extend({

		el: $('#card-container'),
		template: _.template($('#card-tmplt').html()),

		initialize: function() {
			_.bindAll(this, 'updateCard');
			this.cardPlayer = this.options.cardPlayer;
			this.cardPlayer.bind('change:currentIndex', this.updateCard);
		},

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		},

		events: {
			'click .btn-reveal': 'onReveal',
			'click .btn-hide': 'onHide'
		},

		updateCard: function() {
			var index = this.cardPlayer.get('currentIndex');
			var cardModel = this.collection.at(index);
			// console.log('CardView -->', cardModel);
			// $(this.el).html(cardModel.get('symbol'));
			$(this.el).html(this.template(cardModel.toJSON()));
		},

		onReveal: function(e) {
			e.preventDefault();
			$(this.el).find('.c-front').hide();
			$(this.el).find('.c-back').fadeIn();
		},

		onHide: function(e) {
			e.preventDefault();
			$(this.el).find('.c-back').hide();	
			$(this.el).find('.c-front').fadeIn();
		}

	});

	return CardView;
});