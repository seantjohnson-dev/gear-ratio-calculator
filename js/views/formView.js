;(function ($, win) {
	_tc.Factory.Views.formView = _tc.Factory.Views.baseView.extend({
		options: {
			templateUrl: "/templates/form.hbs",
			dependentSelector: ".bikeDependent",
			bikeSelector: ".bikeName",
			bikeViewSelector: ".bikeView",
		},
		events: function () {
			var evts = {};
			evts["change " + this.options.bikeSelector] = "onBikeChange";
			return _.extend(_tc.Factory.Models.baseModel.prototype.events.apply(this, arguments), evts);
		},
		initialize: function () {
			_tc.Factory.Views.baseView.prototype.initialize.apply(this, arguments);
			this.getElems();
			this.bikeView = new _tc.Factory.Views.bikeView({el: this.$bikeViewElem});
			this.render();
		},
		getElems: function () {
			this.$bikeSelector = this.$(this.options.bikeSelector);
			this.$bikeViewElem = this.$(this.options.bikeViewSelector);
			return this;
		},
		onBikeChange: function (e) {
	        var bikeName = this.$bikeSelector.find("option:selected").val();
	        if (bikeName !== "") {
	            _tc.trigger(_tc.EventNames.BikeChanged, bikeName);
	        }
		},
		render: function () {
			// this.bikeView.render();
			// this.$el.html(this.template());
		}
	});
})(jQuery, window);