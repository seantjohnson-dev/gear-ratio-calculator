;(function ($, win) {
	_tc.Factory.Defaults.k1200s = {
	    defaults: {
                name: "K12000S",
                primaryDrive: 1.559,
                tireWidth: 190,
                aspectRatio: 50,
                rimSize: 17,
                tireCirc: 76.90717763787927,
                maxPowerRPM: 10250,
                maxTorqueRPM: 8250,
                redlineRPM: 11000,
                wheelBase: 1570,
                bhp: 164,
                weight: 498,
                grip: 1080,
                frontSprocket: 17,
                rearSprocket: 48,
                gear1Ratio: 2.52,
                gear2Ratio: 1.84,
                gear3Ratio: 1.45,
                gear4Ratio: 1.28,
                gear5Ratio: 1.14,
                gear6Ratio: 1.01,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.BaseBike($.extend({}, _tc.Factory.Defaults.k1200s, _tc.Factory.Defaults.k1200s.defaults)));
})(jQuery, window);