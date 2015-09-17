(function ($, win) {
	_tc.Factory.Upgrades.Ecu = Backbone.View.extend({
		defaults: {
	      stock: {
          level: 1,
          name: "Stock ECU"
	      },
	      l1: {
          level: 1,
          name: "ECU Remapping 1",
          hp: 1
	      },
	      l2: {
          level: 1,
          name: "ECU Remapping 2",
          hp: 1
	      },
	      l3: {
          level: 1,
          name: "ECU Remapping 3",
          hp: 2
	      }
      }
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);