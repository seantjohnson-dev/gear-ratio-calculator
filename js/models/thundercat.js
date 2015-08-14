;(function ($, win) {
	_tc.bikeDefaults.thundercat = {
		name: "Thundercat",
		defaults: {
	        primary: 1.708,
	        tireCirc: 77.15,
	        maxRPM: 15000,
	        wheelBase: 1415,
	        bhp: 97,
	        weight: 416,
	        grip: 959,
	        frontSprocket: 15,
	        rearSprocket: 47,
	        gear1Ratio: 2.846,
	        gear2Ratio: 1.947,
	        gear3Ratio: 1.545,
	        gear4Ratio: 1.333,
	        gear5Ratio: 1.19,
	        gear6Ratio: 1.074
	    }
	};
	_tc.Models.thundercat = _tc.Models.base.extend(_tc.bikeDefaults.thundercat);
})(jQuery, window);