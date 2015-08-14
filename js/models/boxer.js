;(function ($, win) {
	_tc.bikeDefaults.boxer = {
		name: "Boxer",
		defaults: {
	        primary: 1.737,
	        tireCirc: 71.96,
	        maxRPM: 9500,
	        wheelBase: 1485,
	        bhp: 130.5,
	        weight: 392,
	        grip: 1018,
	        frontSprocket: 16,
	        rearSprocket: 44,
	        gear1Ratio: 2.176,
	        gear2Ratio: 1.625,
	        gear3Ratio: 1.29,
	        gear4Ratio: 1.06,
	        gear5Ratio: 0.93,
	        gear6Ratio: 0.84
	    }
	};
	_tc.Models.boxer = _tc.Models.base.extend(_tc.bikeDefaults.boxer);
})(jQuery, window);