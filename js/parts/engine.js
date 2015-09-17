(function ($, win) {
	_tc.Factory.Parts.Engine = Backbone.Model.extend({
		defaults: {
			name: "Engine",
			power: {},
			torque: {}
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
			this.set({
				parts: {
					power: new _tc.Factory.Parts.Power(this.options.power),
					torque: new _tc.Factory.Parts.Torque(this.options.torque)
				}
			});
		}
	});
})(jQuery, window);