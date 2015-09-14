(function ($, win) {
	_tc.Factory.Components.Swingarm = function (options) {
		var choices = [
        {
            name: "Stock Swingarm",
            upgrade: 0,
            value: 0.00
        },
        {
            name: "Swingarm Level 1",
            upgrade: 1,
            value: 0.03
        },
        {
            name: "Swingarm Level 2",
            upgrade: 2,
            value: 0.05
        },
        {
            name: "Swingarm Level 3",
            upgrade: 3,
            value: 0.06
        },
        {
            name: "Swingarm Level 4",
            upgrade: 4,
            value: 0.07
        }
    ];
		var obj = {
				value: 0.00,
        unit: "%"
    };
    return $.extend(true, {}, obj, choices[options]);
	}
})(jQuery, window);