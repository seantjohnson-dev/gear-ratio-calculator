;(function ($, win) {
	_tc.Factory.Defaults.busa = {
                defaults: {
                        name: "Busa",
                        primaryDrive: 1.596,
                        tireCirc: 76.91,
                        maxRPM: 12500,
                        wheelBase: 1480,
                        bhp: 195,
                        weight: 485,
                        grip: 1305,
                        frontSprocket: 19,
                        rearSprocket: 43,
                        gear1Ratio: 2.615,
                        gear2Ratio: 1.937,
                        gear3Ratio: 1.526,
                        gear4Ratio: 1.285,
                        gear5Ratio: 1.136,
                        gear6Ratio: 1.043,
                        nosBHP: 0,
                        nosDuration: 3.0,            
                        tirePressure: 1.0,
                        swingArm: 0.00
                }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.busa, _tc.Factory.Defaults.busa.defaults)));
})(jQuery, window);