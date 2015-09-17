(function ($, win) {
	_tc.Factory.Upgrades.CollectableExhaust = Backbone.View.extend({
		defaults: {
			stock: {
        level: 1,
        name: "Stock Exhaust"
      },
      lightweight: {
        l1: {
          level: 1,
          name: "Lightweight Exhaust",
          hp: 2,
          weight: 2
        }
      },
      performance: {
        l1: {
          level: 1,
          name: "Slip-on Performance Exhaust",
          hp: 1
        }
	    }
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});

  _tc.Factory.Upgrades.Exhaust = _tc.Factory.Upgrades.CollectableExhaust({
    defaults: {
      lightweight: {
        l2: {
          level: 1,
          name: "Upgraded Lightweight Race Exhaust",
          hp: 4,
          weight: 2
        },
        l3: {
          level: 2,
          name: "Custom Lightweight Race Exhaust",
          hp: 5,
          weight: 2
        }
      },
      performance: {
        l2: {
          level: 1,
          name: "High Performance Race Exhaust",
          hp: 2
        },
        l3: {
          level: 2,
          name: "Custom Race Exhaust",
          hp: 4
        }
      }
    },
    initialize: function (options) {
      this.options = $.extend(true, {}, this.defaults, options);
    }
  });
})(jQuery, window);