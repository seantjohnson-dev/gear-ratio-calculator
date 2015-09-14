(function ($, win) {
	_tc.Factory.Components.Tire = function (options) {
		var obj = {
      name: "Tire",
			width: {
        name: "Tire Width",
        value: 190,
        unit: "mm"
      },
			ratio: {
        name: "Aspect Ratio",
        value: 50,
        unit: "%"
      },
			rim: {
        name: "Rim Size",
        value: 17,
        unit: "in"
      },
			pressure: {
        name: "Tire Pressure",
				min: 90,
				max: 110,
				value: 100,
        unit: "%"
			},
      grip: {
        value: 922,
        unit: "newtons"
      },
      circ: {
        name: "Tire Circumference",
        value: 76.907177637879269121105183296189,
        unit: "in"
      }
		};
		return $.extend(true, {}, obj, options);
	};
})(jQuery, window);