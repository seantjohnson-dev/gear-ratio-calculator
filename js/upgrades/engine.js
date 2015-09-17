(function ($, win) {
	_tc.Factory.Upgrades.Engine = Backbone.View.extend({
		defaults: {
      stock: {
        level: 1,
        name: "Stock Engine"
      },
      l1: {
        level: 1,
        name: "Performance Spark Plugs",
        hp: 1
      },
      l2: {
        level: 1,
        name: "Cylinder Porting",
        hp: 4
      },
      displacement: {
          l1: {
            level: 1,
            name: "Displacement Increase",
            hp: 6,
            weight: 2
          },
          l2: {
            level: 1,
            name: "Displacement Increase 2",
            hp: 9,
            weight: 2
          },
          l3: {
            level: 1,
            name: "Displacement Increase 3",
            hp: 14,
            weight: 2
          }
      },
      factory: {
          l1: {
            level: 1,
            name: "Factory Motor Kit",
            hp: 10
          },
          l2: {
            level: 1,
            name: "Factory Motor Kit 2",
            hp: 17,
            weight: 4
          }
      },
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);