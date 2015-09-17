(function ($, win) {
	_tc.Factory.Upgrades.Tires = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "Stock Tires",
        grip: 0
      },
      l1: {
        level: 1,
        name: "Upgraded Street Tires",
        grip: 0.15
      },
      l2: {
        level: 1,
        name: "Dual-Compound Street Tires",
        grip: 0.20
      },
      l3: {
        level: 1,
        name: "DOT Race Tires",
        grip: 0.28
      },
      l4: {
        level: 1,
        name: "NON-DOT Race Tires",
        grip: 0.35
      },
      l5: {
        level: 1,
        name: "NON-DOT Race Slicks",
        grip: 0.40
      }
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);