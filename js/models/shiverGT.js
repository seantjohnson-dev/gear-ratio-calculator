;(function ($, win) {
	_tc.Factory.Defaults.shiverGT = {
	    defaults: {
                name: "Shiver GT",
                primary: 1.75,
                tireCirc: 77.9,
                maxRPM: 12000,
                wheelBase: 1440,
                bhp: 96,
                weight: 416,
                grip: 968,
                frontSprocket: 16,
                rearSprocket: 44,
                gear1Ratio: 2.57,
                gear2Ratio: 1.88,
                gear3Ratio: 1.5,
                gear4Ratio: 1.27,
                gear5Ratio: 1.13,
                gear6Ratio: 1.04,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 100,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.shiverGT, _tc.Factory.Defaults.shiverGT.defaults)));
})(jQuery, window);