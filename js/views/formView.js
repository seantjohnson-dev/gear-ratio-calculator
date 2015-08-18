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
			return _.extend(_tc.Factory.Views.baseView.prototype.events.apply(this, arguments), evts);
		},
		initialize: function (options) {
			_tc.Factory.Views.baseView.prototype.initialize.apply(this, arguments);
			console.log(this._templateString);
		},
		createChildren: function () {
			this.bikeView = new _tc.Factory.Views.bikeView({el: this.$bikeViewElem});
			return this;
		},
		clearBikeOptions: function () {
			this.$bikeOpts = $();
			return this;
		},
		getBikeOptions: function () {
			return this.$bikeOpts;
		},
		createBikeOption: function (name) {
			this.clearBikeOptions();
			if (!name) {
				this.$bikeOpts.append($("<option/>").text("Select a Bike"));
			} else {
				this.$bikeOpts.append($("<option/>").val(name).text(name));
			}
			return this;
		},
		populateBikeSelector: function () {
			this.clearBikeOptions();
			this.collection.each(this.proxy(function (model) {
				this.createBikeOption(model.get('name'));
			}));
			this.$bikeSelector.html(this.createBikeOption()).append(this.$bikeOpts);
			return this;
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
		renderChildViews: function () {

		},
		render: function () {
			this.render(this.template());
			if (!this._children) {
				this._children = [];
				this.createChildren();
			}
		}
	});
})(jQuery, window);