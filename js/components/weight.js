(function ($, win) {
	_tc.Factory.Components.Weight = function (options) {
		var obj = {
			name: "Weight",
			value: 392,
			unit: "lbs"
		};
		return $.extend(true, {}, obj, options);
	};
})(jQuery, window);