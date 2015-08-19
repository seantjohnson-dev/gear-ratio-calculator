;(function ($, win) {
	_tc.Factory.Defaults.yzf1000 = {
	    defaults: {
                name: "YZF 1000",
                primary: 1.512,
                tireCirc: 79.26,
                maxRPM: 14000,
                wheelBase: 1415,
                bhp: 178,
                weight: 390,
                grip: 1161,
                frontSprocket: 17,
                rearSprocket: 47,
                gear1Ratio: 2.533,
                gear2Ratio: 2.063,
                gear3Ratio: 1.762,
                gear4Ratio: 1.522,
                gear5Ratio: 1.364,
                gear6Ratio: 1.269,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 100,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.yzf1000, _tc.Factory.Defaults.yzf1000.defaults)));
})(jQuery, window);