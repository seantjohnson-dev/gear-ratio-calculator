(function ($, win) {
	_tc.Factory.Components.RearSprocket = Backbone.View.extend({
		defaults: {
			name: "Rear Sprocket",
			min: 35,
			max: 55,
			value: 48,
			unit: "teeth"
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);