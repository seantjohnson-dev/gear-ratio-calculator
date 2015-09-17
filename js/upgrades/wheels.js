(function ($, win) {
	_tc.Factory.Upgrades.Wheels = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "Stock Wheels",
        weight: 0
      },
      l1: {
        level: 1,
        name: "Lighter Wheels",
        weight: -8
      },
      l2: {
        level: 2,
        name: "Ultra Lightweight Wheels",
        weight: -13
      }
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);