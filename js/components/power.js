(function ($, win) {
	_tc.Factory.Components.Power = Backbone.View.extend({
		defaults: {
        name: "Horse Power",
        value: 64,
        rpm: 8500,
        nitrous: {},
        unit: "hp"
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
			this.set({
				components: {
					nitrous: _tc.Factory.Components.Nitrous(this.options.nitrous)
				}
			});
		}
	});
})(jQuery, window);