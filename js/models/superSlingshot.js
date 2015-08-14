;(function ($, win) {
	_tc.bikeDefaults.superSlingshot = {
		name: "Super Slingshot",
		defaults: {
	        primary: 1.617,
	        tireCirc: 76.91,
	        maxRPM: 13500,
	        wheelBase: 1415,
	        bhp: 183,
	        weight: 396,
	        grip: 1068,
	        frontSprocket: 17,
	        rearSprocket: 42,
	        gear1Ratio: 2.562,
	        gear2Ratio: 2.025,
	        gear3Ratio: 1.714,
	        gear4Ratio: 1.5,
	        gear5Ratio: 1.36,
	        gear6Ratio: 1.269
	    }
	};
	_tc.Models.superSlingshot = _tc.Models.base.extend(_tc.bikeDefaults.superSlingshot);
})(jQuery, window);