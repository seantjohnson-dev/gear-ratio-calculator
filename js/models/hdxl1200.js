;(function ($, win) {
	_tc.Factory.Defaults.hdxl1200 = {
		defaults: {
			name: "HD-XL1200",
		    primaryDrive: 2.095,
		    tireWidth: 150,
            aspectRatio: 80,
            rimSize: 16,
		    tireCirc: 79.949822491356,
		    maxPowerRPM: 5252,
            maxTorqueRPM: 5252,
		    redlineRPM: 6000,
		    wheelBase: 1524,
		    bhp: 75.5,
		    weight: 531,
		    grip: 1255,
		    frontSprocket: 18,
		    rearSprocket: 38,
		    gear1Ratio: 2.688,
		    gear2Ratio: 1.845,
		    gear3Ratio: 1.433,
		    gear4Ratio: 1.181,
		    gear5Ratio: 1.0,
		    gear6Ratio: 0.4,
	        nosBHP: 0,
	        nosDuration: 3.0,            
	        tirePressure: 1.0,
	        swingArm: 0.00
		}
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.hdxl1200, _tc.Factory.Defaults.hdxl1200.defaults)));
})(jQuery, window);