(function ($, win) {
	_tc.Factory.Components.Torque = Backbone.View.extend({
		defaults: {
        name: "Torque",
        value: 105.2853,
        rpm: 7000,
        unit: "ft-lbs"
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);