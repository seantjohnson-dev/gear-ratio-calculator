(function ($, win) {
	_tc.Factory.Upgrades.Weight = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "Stock Bike",
        weight: 0
      },
      l1: {
        level: 1,
        name: "Weight Reduction Kit",
        weight: -11
      },
      l2: {
        level: 1,
        name: "Weight Reduction Kit 2",
        weight: -17
      },
      l3: {
        level: 1,
        name: "Weight Reduction Kit 3",
        weight: -22
      }
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);