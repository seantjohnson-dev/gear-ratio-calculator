;(function ($, win) {
        _tc.Factory.Defaults.b1125 = {
                defaults: {
                        name: "B-1125",
                        primaryDrive: 1.8055,
                        tireWidth: 180,
                        aspectRatio: 55,
                        rimSize: 17,
                        tireCirc: 77.89665563900991,
                        maxPowerRPM: 9800,
                        maxTorqueRPM: 9000,
                        redlineRPM: 10500,
                        wheelBase: 1384,
                        bhp: 146,
                        weight: 374,
                        grip: 1008,
                        frontSprocket: 17,
                        rearSprocket: 44,
                        gear1Ratio: 2.462,
                        gear2Ratio: 1.75,
                        gear3Ratio: 1.381,
                        gear4Ratio: 1.174,
                        gear5Ratio: 1.042,
                        gear6Ratio: 0.96,
                        nosBHP: 0,
                        nosDuration: 3.0,            
                        tirePressure: 1.0,
                        swingArm: 0.00  
                }
        };
        _tc.bikes.push(new _tc.Factory.Models.baseModel($.extend({}, _tc.Factory.Defaults.b1125, _tc.Factory.Defaults.b1125.defaults)));
})(jQuery, window);