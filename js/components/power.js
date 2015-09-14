(function ($, win) {
	_tc.Factory.Components.Power = function (options) {
		var obj = {
            name: "Horse Power",
            value: 64,
            rpm: 8500,
            unit: "hp"
        };
		return $.extend(true, {}, obj, options);
	}
})(jQuery, window);