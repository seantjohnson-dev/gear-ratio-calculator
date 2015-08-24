;(function ($, win) {
	_tc.Factory.Defaults.thundercat = {
	    defaults: {
                name: "Thundercat",
                primaryDrive: 1.708,
                tireWidth: 160,
                aspectRatio: 60,
                rimSize: 17,
                tireCirc: 77.15454713816193,
                maxPowerRPM: 11500,
                maxTorqueRPM: 9500,
                redlineRPM: 15000,
                wheelBase: 1415,
                bhp: 97,
                weight: 416,
                grip: 959,
                frontSprocket: 15,
                rearSprocket: 47,
                gear1Ratio: 2.846,
                gear2Ratio: 1.947,
                gear3Ratio: 1.545,
                gear4Ratio: 1.333,
                gear5Ratio: 1.19,
                gear6Ratio: 1.074,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.thundercat, _tc.Factory.Defaults.thundercat.defaults)));
})(jQuery, window);