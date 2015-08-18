;(function ($, win) {
	_tc.Factory.Defaults.b1125 = {
		name: "B-1125",
		defaults: {
	        primary: 1.8055,
	        tireCirc: 77.9,
	        maxRPM: 10500,
	        wheelBase: 1384,
	        bhp: 146,
	        weight: 374,
	        grip: 1008,
	        frontSprocket: 17,
	        rearSprocket: 44,
	        gear1Ratio: 2.462,
	        gear2Ratio: 1.75,
	        gear3Ratio: 1.381,
	        gear4Ratio: 1.174,
	        gear5Ratio: 1.042,
	        gear6Ratio: 0.96
	    }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel(_tc.Factory.Defaults.b1125));
})(jQuery, window);