;(function ($, win) {
	_tc.Factory.Defaults.ninja1000r = {
	    defaults: {
                name: "Ninja 1000R",
                primaryDrive: 1.681,
                tireWidth: 190,
                aspectRatio: 50,
                rimSize: 17,
                tireCirc: 76.90717763787927,
                maxPowerRPM: 11700,
                maxTorqueRPM: 9500,
                redlineRPM: 14000,
                wheelBase: 1415,
                bhp: 197,
                weight: 394,
                grip: 1170,
                frontSprocket: 17,
                rearSprocket: 39,
                gear1Ratio: 2.6,
                gear2Ratio: 2.053,
                gear3Ratio: 1.737,
                gear4Ratio: 1.571,
                gear5Ratio: 1.444,
                gear6Ratio: 1.348,
                nosBHP: 0,
                nosDuration: 3.0,            
                tirePressure: 1.0,
                swingArm: 0.00
            }
	};
	_tc.bikes.push(new _tc.Factory.Models.BaseBike($.extend({}, _tc.Factory.Defaults.ninja1000r, _tc.Factory.Defaults.ninja1000r.defaults)));
})(jQuery, window);