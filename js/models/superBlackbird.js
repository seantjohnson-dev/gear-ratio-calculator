;(function ($, win) {
	_tc.Factory.Defaults.superBlackbird = {
		name: "Super Blackbird",
		defaults: {
	        primary: 1.571,
	        tireCirc: 77.9,
	        maxRPM: 11000,
	        wheelBase: 1490,
	        bhp: 150,
	        weight: 500,
	        grip: 1233,
	        frontSprocket: 17,
	        rearSprocket: 44,
	        gear1Ratio: 2.769,
	        gear2Ratio: 2.0,
	        gear3Ratio: 1.579,
	        gear4Ratio: 1.333,
	        gear5Ratio: 1.167,
	        gear6Ratio: 1.042
	    }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel(_tc.Factory.Defaults.superBlackbird));
})(jQuery, window);