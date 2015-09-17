(function ($, win) {
	_tc.Factory.Parts.GearBox = Backbone.View.extend({
		defaults: {
			min: 0.4,
			max: 5.0,
			number: 1,
			value: 2.438
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);