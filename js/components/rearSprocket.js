(function ($, win) {
	_tc.Factory.Components.RearSprocket = function (options) {
		var obj = {
			name: "Rear Sprocket",
			min: 35,
			max: 55,
			value: 48
		};
		return $.extend(true, {}, new _tc.Factory.Components.Sprocket(obj), options);
	};
})(jQuery, window);