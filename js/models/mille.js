;(function ($, win) {
	_tc.Factory.Defaults.mille = {
	    defaults: {
                name: "Mille",
                primary: 1.9354,
                tireCirc: 76.91,
                maxRPM: 12000,
                wheelBase: 1418,
                bhp: 139.5,
                weight: 416,
                grip: 956,
                frontSprocket: 16,
                rearSprocket: 40,
                gear1Ratio: 2.27,
                gear2Ratio: 1.63,
                gear3Ratio: 1.3,
                gear4Ratio: 1.091,
                gear5Ratio: 0.96,
                gear6Ratio: 0.88,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 100,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.mille, _tc.Factory.Defaults.mille.defaults)));
})(jQuery, window);