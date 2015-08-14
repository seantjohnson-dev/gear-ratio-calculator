;(function ($, win) {
	_tc.bikeDefaults.ninja1000r = {
		name: "Ninja 1000R",
		defaults: {
	        primary: 1.681,
	        tireCirc: 79.26,
	        maxRPM: 14000,
	        wheelBase: 1389,
	        bhp: 197,
	        weight: 394,
	        grip: 1170,
	        frontSprocket: 17,
	        rearSprocket: 39,
	        gear1Ratio: 2.6,
	        gear2Ratio: 2.053,
	        gear3Ratio: 1.737,
	        gear4Ratio: 1.571,
	        gear5Ratio: 1.444,
	        gear6Ratio: 1.348
	    }
	};
	_tc.Models.ninja1000r = _tc.Models.base.extend(_tc.bikeDefaults.ninja1000r);
})(jQuery, window);