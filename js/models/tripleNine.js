;(function ($, win) {
	_tc.Factory.Defaults.tripleNine = {
	    defaults: {
                name: "Triple Nine",
                primaryDrive: 1.84,
                tireCirc: 76.91,
                maxRPM: 11000,
                wheelBase: 1420,
                bhp: 147,
                weight: 399,
                grip: 1262,
                frontSprocket: 15,
                rearSprocket: 36,
                gear1Ratio: 2.466,
                gear2Ratio: 1.765,
                gear3Ratio: 1.4,
                gear4Ratio: 1.182,
                gear5Ratio: 1.043,
                gear6Ratio: 0.958,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.tripleNine, _tc.Factory.Defaults.tripleNine.defaults)));
})(jQuery, window);