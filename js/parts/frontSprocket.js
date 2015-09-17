(function ($, win) {
	_tc.Factory.Parts.FrontSprocket = Backbone.View.extend({
		defaults: {
			name: "Front Sprocket",
			min: 10,
			max: 19,
			value: 16,
			unit: "teeth"
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);