;(function ($, win) {
	_tc.Factory.Defaults.k1200s = {
	    defaults: {
                name: "K12000S",
                primary: 1.559,
                tireCirc: 76.91,
                maxRPM: 11000,
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
                tirePressure: 100,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.k1200s, _tc.Factory.Defaults.k1200s.defaults)));
})(jQuery, window);