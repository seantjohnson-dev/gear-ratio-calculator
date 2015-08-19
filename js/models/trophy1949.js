;(function ($, win) {
	_tc.Factory.Defaults.trophy1949 = {
	    defaults: {
                name: "1949 Trophy",
                primary: 2.784,
                tireCirc: 84.823,
                maxRPM: 7000,
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
                tirePressure: 100,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.trophy1949, _tc.Factory.Defaults.trophy1949.defaults)));
})(jQuery, window);