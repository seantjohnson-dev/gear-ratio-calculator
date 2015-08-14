;(function ($, win) {
	_tc.bikeDefaults.shiverGT = {
		name: "Shiver GT",
		defaults: {
	        primary: 1.75,
	        tireCirc: 77.9,
	        maxRPM: 12000,
	        wheelBase: 1440,
	        bhp: 96,
	        weight: 416,
	        grip: 968,
	        frontSprocket: 16,
	        rearSprocket: 44,
	        gear1Ratio: 2.57,
	        gear2Ratio: 1.88,
	        gear3Ratio: 1.5,
	        gear4Ratio: 1.27,
	        gear5Ratio: 1.13,
	        gear6Ratio: 1.04
	    }
	};
	_tc.Models.shiverGT = _tc.Models.base.extend(_tc.bikeDefaults.shiverGT);
})(jQuery, window);