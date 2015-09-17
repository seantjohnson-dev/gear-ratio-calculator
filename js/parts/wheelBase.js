(function ($, win) {
	_tc.Factory.Parts.WheelBase = Backbone.View.extend({
		defaults: {
        name: "Wheel Base",
        value: 1418,
        unit: "mm"
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);