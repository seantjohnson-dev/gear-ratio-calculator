(function ($, win) {
	_tc.Factory.Upgrades.Turbo = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "No Turbo",
        hp: 0
      },
      l1: {
        level: 1,
        name: "Turbo Kit",
        hp: 18,
        weight: 2
      },
      l2: {
        level: 1,
        name: "Turbo Kit 2",
        hp: 26,
        weight: 2
      },
      l3: {
        level: 1,
        name: "Turbo Kit 3",
        hp: 41,
        weight: 4
      },
      l4: {
        level: 1,
        name: "Turbo Kit 4",
        hp: 36,
        weight: 2
      }
    },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);