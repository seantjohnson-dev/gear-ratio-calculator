(function ($, win) {
	_tc.Factory.Components.WheelBase = function (options) {
		var obj = {
        name: "Wheel Base",
        value: 1418,
        unit: "mm"
    };
		return $.extend(true, {}, obj, options);
	}
})(jQuery, window);