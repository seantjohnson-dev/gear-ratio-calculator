;(function ($, win) {
	_tc.Factory.Defaults.v92sc = {
		name: "V92SC",
		defaults: {
	        primary: 2.095,
	        tireCirc: 75.67,
	        maxRPM: 6000,
	        wheelBase: 1416,
	        bhp: 74,
	        weight: 637,
	        grip: 1560,
	        frontSprocket: 18,
	        rearSprocket: 39,
	        gear1Ratio: 2.033,
	        gear2Ratio: 1.183,
	        gear3Ratio: 0.903,
	        gear4Ratio: 0.739,
	        gear5Ratio: 0.619,
	        gear6Ratio: 0.4
	    }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel(_tc.Factory.Defaults.v92sc));
})(jQuery, window);