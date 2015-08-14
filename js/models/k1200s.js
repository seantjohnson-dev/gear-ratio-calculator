;(function ($, win) {
	_tc.bikeDefaults.k1200s = {
		name: "K12000S",
		defaults: {
	        primary: 1.559,
	        tireCirc: 76.91,
	        maxRPM: 11000,
	        wheelBase: 1570,
	        bhp: 164,
	        weight: 498,
	        grip: 1080,
	        frontSprocket: 17,
	        rearSprocket: 48,
	        gear1Ratio: 2.52,
	        gear2Ratio: 1.84,
	        gear3Ratio: 1.45,
	        gear4Ratio: 1.28,
	        gear5Ratio: 1.14,
	        gear6Ratio: 1.01
	    }
	};
	_tc.Models.k1200s = _tc.Models.base.extend(_tc.bikeDefaults.k1200s);
})(jQuery, window);