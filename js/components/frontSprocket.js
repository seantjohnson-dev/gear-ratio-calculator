(function ($, win) {
	_tc.Factory.Components.FrontSprocket = function (options) {
		var obj = {
			name: "Front Sprocket",
			min: 10,
			max: 19,
			value: 16
		};
		return $.extend(true, {}, new _tc.Factory.Components.Sprocket(obj), options);
	};
})(jQuery, window);