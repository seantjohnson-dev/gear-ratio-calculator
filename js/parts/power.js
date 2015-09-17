(function ($, win) {
	_tc.Factory.Parts.Power = Backbone.View.extend({
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
				parts: {
					nitrous: _tc.Factory.Parts.Nitrous(this.options.nitrous)
				}
			});
		}
	});
})(jQuery, window);