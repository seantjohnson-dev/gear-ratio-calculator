(function ($, win) {
	_tc.Factory.Components.Ratios = function (options) {
		var obj = {
        name: "Ratios",
        primary: {
            name: "Primary Drive",
            value: 2.095
        },
        secondary: {
            name: "Secondary Drive",
            value: 3.0666666666666666666666666666667 // Calculated
        },
        gears: {
            name: "Gears Drives",
            min: 0.4,
            values: [
            	{
	            	value: 2.438,
	            	max: 5.0,
	            	overall: 15.663337333333333333333333333333
	            },
	            {
	            	value: 1.714,
	            	max: 2.438,
	            	overall: 11.011878666666666666666666666667
	            },
	            {
	            	value: 1.333,
	            	max: 1.714,
	            	overall: 8.5640806666666666666666666666668
	            },
	            {
	            	value: 1.111,
	            	max: 1.333,
	            	overall: 7.1378046666666666666666666666667
	            },
	            {
	            	value: 0.966,
	            	max: 1.111,
	            	overall: 6.206228
	            },
	            {
	            	value: 0.852,
	            	max: 0.966,
	            	overall: 5.473816
	            }
            ]
        }
    };
		var merged = $.extend(true, {}, new _tc.Factory.Components.Sprocket(obj), options);
		return merged;
		//TODO: Calculate all of the gear ratios' overall
		//TODO: Validate that the gear ratio values are always decending from the gear value before it.

	};
})(jQuery, window);