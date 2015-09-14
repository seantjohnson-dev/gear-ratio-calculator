(function ($, win) {
	_tc.Factory.Components.Engine = Backbone.Model.extend({
		defaults: {
			name: "Engine",
			power: {},
			torque: {}
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
			this.set({
				components: {
					power: new _tc.Factory.Components.Power(this.options.power),
					torque: new _tc.Factory.Components.Torque(this.options.torque)
				}
			});
		}
	});
})(jQuery, window);