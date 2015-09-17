(function ($, win) {
	_tc.Factory.Upgrades.Intake = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "Stock Intake",
        hp: 0
      },
      l1: {
        level: 1,
        name: "Performance Air Filter",
        hp: 4
      },
      l2: {
        level: 1,
        name: "Racing Intake Setup",
        hp: 6
      }
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);