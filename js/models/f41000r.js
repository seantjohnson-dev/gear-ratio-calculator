;(function ($, win) {
	_tc.Factory.Defaults.f41000r = {
	    defaults: {
                name: "F4 1000R",
                primaryDrive:  1.7083,
                tireWidth: 180,
                aspectRatio: 55,
                rimSize: 17,
                tireCirc: 79.26,
                maxPowerRPM: 13000,
                maxTorqueRPM: 10000,
                redlineRPM: 13500,
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
                gear6Ratio: 1.21,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.BaseBike($.extend({}, _tc.Factory.Defaults.f41000r, _tc.Factory.Defaults.f41000r.defaults)));
})(jQuery, window);