;(function ($, win) {
	_tc.Factory.Defaults.v92sc = {
	    defaults: {
                name: "V92SC",
                primaryDrive: 2.095,
                tireWidth: 180,
                aspectRatio: 50,
                rimSize: 17,
                tireCirc: 75.67033013646596,
                maxPowerRPM: 5252,
                maxTorqueRPM: 5252,
                redlineRPM: 6000,
                wheelBase: 1416,
                bhp: 74,
                weight: 637,
                grip: 1560,
                frontSprocket: 18,
                rearSprocket: 39,
                gear1Ratio: 2.033,
                gear2Ratio: 1.183,
                gear3Ratio: 0.903,
                gear4Ratio: 0.739,
                gear5Ratio: 0.619,
                gear6Ratio: 0.4,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.BaseBike($.extend({}, _tc.Factory.Defaults.v92sc, _tc.Factory.Defaults.v92sc.defaults)));
})(jQuery, window);