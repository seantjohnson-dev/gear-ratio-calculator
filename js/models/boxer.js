;(function ($, win) {
	_tc.Factory.Defaults.boxer = {
                defaults: {
                        name: "Boxer",
                        primaryDrive: 1.737,
                        tireWidth: 190,
                        aspectRatio: 55,
                        rimSize: 17,
                        tireCirc: 79.25718789056454,
                        maxPowerRPM: 8750,
                        maxTorqueRPM: 6000,
                        redlineRPM: 9500,
                        wheelBase: 1485,
                        bhp: 130.5,
                        weight: 392,
                        grip: 1018,
                        frontSprocket: 16,
                        rearSprocket: 44,
                        gear1Ratio: 2.176,
                        gear2Ratio: 1.625,
                        gear3Ratio: 1.29,
                        gear4Ratio: 1.06,
                        gear5Ratio: 0.93,
                        gear6Ratio: 0.84,
                        nosBHP: 0,
                        nosDuration: 3.0,            
                        tirePressure: 1.0,
                        swingArm: 0.00
                }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.boxer, _tc.Factory.Defaults.boxer.defaults)));
})(jQuery, window);