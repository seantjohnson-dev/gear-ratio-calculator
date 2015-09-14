(function ($, win) {
	_tc.Factory.Components.Nitrous = function (options) {
		var obj = {
            name: "Nitrous",
            duration: {
                value: 3.0,
                unit: "s"
            },
            power: {
                value: 0,
                unit: "hp"
            }
        };
		return $.extend(true, {}, obj, options);
	}
})(jQuery, window);