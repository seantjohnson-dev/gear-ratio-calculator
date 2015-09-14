;(function ($, win) {
	_tc.Factory.Defaults.slingshot = {
	    defaults: {
                name: "Slingshot",
                primaryDrive: 1.974,
                tireWidth: 180,
                aspectRatio: 55,
                rimSize: 17,
                tireCirc: 77.89665563900991,
                maxPowerRPM: 13500,
                maxTorqueRPM: 11500,
                redlineRPM: 15000,
                wheelBase: 1400,
                bhp: 146,
                weight: 368,
                grip: 1156,
                frontSprocket: 17,
                rearSprocket: 45,
                gear1Ratio: 2.785,
                gear2Ratio: 2.052,
                gear3Ratio: 1.714,
                gear4Ratio: 1.5,
                gear5Ratio: 1.347,
                gear6Ratio: 1.208,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.BaseBike($.extend({}, _tc.Factory.Defaults.slingshot, _tc.Factory.Defaults.slingshot.defaults)));
})(jQuery, window);