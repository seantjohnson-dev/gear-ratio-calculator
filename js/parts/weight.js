(function ($, win) {
	_tc.Factory.Parts.Weight = Backbone.View.extend({
		defaults: {
			name: "Weight",
			value: 392,
			unit: "lbs"
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);