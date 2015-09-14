(function ($, win) {
	_tc.Factory.Components.GearBox = function (options) {
		var min = 0.4,
		var max = 5.0
		var obj = {
			min: 0.4,
			max: 5.0,
			number: 1,
			value: 2.438
		};
		return $.extend(true, {}, obj, options);
	};
})(jQuery, window);