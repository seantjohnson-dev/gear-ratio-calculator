;(function ($, win) {
	_tc.Factory.Defaults.ninja650 = {
	    defaults: {
                name: "Ninja 650",
                primary: 2.095,
                tireCirc: 77.15,
                maxRPM: 12000,
                wheelBase: 1410,
                bhp: 64,
                weight: 392,
                grip: 922,
                frontSprocket: 15,
                rearSprocket: 46,
                gear1Ratio: 2.438,
                gear2Ratio: 1.714,
                gear3Ratio: 1.333,
                gear4Ratio: 1.111,
                gear5Ratio: 0.966,
                gear6Ratio: 0.852,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 100,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.ninja650, _tc.Factory.Defaults.ninja650.defaults)));
})(jQuery, window);