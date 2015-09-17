(function ($, win) {
	_tc.Factory.Upgrades.Nitro = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "No Nitrous"
      },
      l1: {
        level: 1,
        name: "Nitrous Kit",
        hp: 8
      },
      l2: {
        level: 1,
        name: "Nitrous Kit",
        hp: 12
      },
      lowCapacity: {
        l1: {
          level: 1,
          name: "Nitrous Kit Low Capacity",
          hp: 14
        },
        l2: {
          level: 1,
          name: "Nitrous Kit Low Capacity 2",
          hp: 17
        },
        l3: {
          level: 2,
          name: "Nitrous Kit Low Capacity 3",
          hp: 18
        }
      },
      highCapacity: {
        l1: {
          level: 2,
          name: "Nitrous Kit High Capacity",
          hp: 16
        },
        l2: {
          level: 2,
          name: "Nitrous Kit High Capacity 2",
          hp: 18
        },
        l3: {
          level: 2,
          name: "Nitrous Kit High Capacity 3",
          hp: 21
        }
      }
  	},
	initialize: function (options) {
		this.options = $.extend(true, {}, this.defaults, options);
	}
});
})(jQuery, window);