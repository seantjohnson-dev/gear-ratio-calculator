;(function ($, win) {
	_tc.Factory.Defaults.yzf1000 = {
	    defaults: {
                name: "YZF 1000",
                primaryDrive: 1.512,
                tireWidth: 190,
                aspectRatio: 50,
                rimSize: 17,
                tireCirc: 76.90717763787927,
                maxPowerRPM: 12500,
                maxTorqueRPM: 10000,
                redlineRPM: 14000,
                wheelBase: 1415,
                bhp: 178,
                weight: 390,
                grip: 1161,
                frontSprocket: 17,
                rearSprocket: 47,
                gear1Ratio: 2.533,
                gear2Ratio: 2.063,
                gear3Ratio: 1.762,
                gear4Ratio: 1.522,
                gear5Ratio: 1.364,
                gear6Ratio: 1.269,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.yzf1000, _tc.Factory.Defaults.yzf1000.defaults)));
})(jQuery, window);