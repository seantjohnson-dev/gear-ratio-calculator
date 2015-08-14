;(function ($, win) {
	_tc.bikeDefaults.tripleNine = {
		name: "Triple Nine",
		defaults: {
	        primary: 1.84,
	        tireCirc: 76.91,
	        maxRPM: 11000,
	        wheelBase: 1420,
	        bhp: 147,
	        weight: 399,
	        grip: 1262,
	        frontSprocket: 15,
	        rearSprocket: 36,
	        gear1Ratio: 2.466,
	        gear2Ratio: 1.765,
	        gear3Ratio: 1.4,
	        gear4Ratio: 1.182,
	        gear5Ratio: 1.043,
	        gear6Ratio: 0.958
	    }
	};
	_tc.Models.tripleNine = _tc.Models.base.extend(_tc.bikeDefaults.tripleNine);
})(jQuery, window);