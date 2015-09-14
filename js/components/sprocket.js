(function ($, win) {
	_tc.Factory.Components.Sprocket = function (options) {
		var obj = {
			name: "Sprocket",
			unit: "teeth",
			min: 10,
			max: 19,
			value: 16
		};
		return $.extend(true, {}, obj, options);
	};
})(jQuery, window);