;(function ($, win) {
	_tc.Factory.Defaults.f41000r = {
		name: "F4 1000R",
		defaults: {
	        primary:  1.7083,
	        tireCirc: 79.26,
	        maxRPM: 13500,
	        wheelBase: 1430,
	        bhp: 182,
	        weight: 423,
	        grip: 1225,
	        frontSprocket: 15,
	        rearSprocket: 41,
	        gear1Ratio: 2.92,
	        gear2Ratio: 2.13,
	        gear3Ratio: 1.78,
	        gear4Ratio: 1.5,
	        gear5Ratio: 1.32,
	        gear6Ratio: 1.21
	    }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel(_tc.Factory.Defaults.f41000r));
})(jQuery, window);