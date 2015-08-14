;(function ($, win) {
	_tc.bikeDefaults.busa = {
		name: "Busa",
		defaults: {
	        primary: 1.596,
	        tireCirc: 76.91,
	        maxRPM: 12500,
	        wheelBase: 1480,
	        bhp: 195,
	        weight: 485,
	        grip: 1305,
	        frontSprocket: 19,
	        rearSprocket: 43,
	        gear1Ratio: 2.615,
	        gear2Ratio: 1.937,
	        gear3Ratio: 1.526,
	        gear4Ratio: 1.285,
	        gear5Ratio: 1.136,
	        gear6Ratio: 1.043
	    }
	};
	_tc.Models.busa = _tc.Models.base.extend(_tc.bikeDefaults.busa);
})(jQuery, window);