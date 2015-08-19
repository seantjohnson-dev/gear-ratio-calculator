;(function ($, win) {
	_tc.Factory.Defaults.ninja1400 = {
	    defaults: {
                name: "Ninja 1400",
                primary: 1.556,
                tireCirc: 76.91,
                maxRPM: 11000,
                wheelBase: 1461,
                bhp: 187,
                weight: 473,
                grip: 1364,
                frontSprocket: 17,
                rearSprocket: 41,
                gear1Ratio: 2.625,
                gear2Ratio: 1.947,
                gear3Ratio: 1.545,
                gear4Ratio: 1.333,
                gear5Ratio: 1.154,
                gear6Ratio: 1.036,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 100,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.ninja1400, _tc.Factory.Defaults.ninja1400.defaults)));
})(jQuery, window);