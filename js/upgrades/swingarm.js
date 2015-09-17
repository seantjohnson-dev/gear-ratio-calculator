(function ($, win) {
	_tc.Factory.Upgrades.Swingarm = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "Stock Swingarm",
        wheelBase: 0
      },
      l1: {
        level: 1,
        name: "Swingarm 1",
        wheelBase: 0.03
      },
      l2: {
        level: 1,
        name: "Swingarm 2",
        wheelBase: 0.05
      },
      l3: {
        level: 1,
        name: "Swingarm 3",
        wheelBase: 0.06
      },
      l4: {
        level: 1,
        name: "Swingarm 4",
        wheelBase: 0.07
      }
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);