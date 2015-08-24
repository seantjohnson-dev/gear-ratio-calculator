;(function ($, win) {
	_tc.Factory.Defaults.trophy1949 = {
	    defaults: {
                name: "1949 Trophy",
                primaryDrive: 2.784,
                tireWidth: 205,
                aspectRatio: 50,
                rimSize: 18,
                tireCirc: 81.90404154358902,
                maxPowerRPM: 6500,
                maxTorqueRPM: 4250,
                redlineRPM: 7000,
                wheelBase: 1615,
                bhp: 36,
                weight: 293,
                grip: 578,
                frontSprocket: 18,
                rearSprocket: 46,
                gear1Ratio: 3.07,
                gear2Ratio: 2.3,
                gear3Ratio: 1.45,
                gear4Ratio: 1.0,
                gear5Ratio: 0.4,
                gear6Ratio: 0.4,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.trophy1949, _tc.Factory.Defaults.trophy1949.defaults)));
})(jQuery, window);