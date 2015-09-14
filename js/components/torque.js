(function ($, win) {
	_tc.Factory.Components.Torque = function (options) {
		var obj = {
            name: "Torque",
            value: 105.2853,
            rpm: 7000,
            unit: "ft-lbs"
        };
		return $.extend(true, {}, obj, options);
	}
})(jQuery, window);