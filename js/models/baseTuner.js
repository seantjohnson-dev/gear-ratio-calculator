(function ($, win) {
	_tc.Factory.Models.baseTunerModel = Backbone.Model.extend({
        constants: {
            newtonsInPound: 4.44822162,
            inchesInFoot: 12,
            totalGears: 6,
            torqueHPConstant: 5252,
            gearRatioMin: 0.4,
            gearRatioMax: 5.0,
            gravityInMeters: 9.80665,
            gravityInFeet: 32.17404856,
            kilogramsInSlug: 14.5939029,
            feetInMile: 5280,
            feetInMeter: 3.28084,
            kilometersInMile: 1.60934,
            millimetersInInch: 25.4,
            secondsInMinute: 60,
            secondsInHour: 3600,
            minutesInHour: 60,
            kilowattsInHorsePower: 1.34102209
        },
        poundsNewtons: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "pounds") {
                return val / this.constants.newtonsInPound;
            } else if (convertTo.toLowerCase() == "newtons") {
                return val * this.constants.newtonsInPound;
            }
            return false;
        },
        inchesMillimeters: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "millimeters") {
                val * this.constants.millimetersInInch;
            } else if (convertTo.toLowerCase() == "inches") {
                val / this.constants.millimetersInInch;
            }
            return false;
        },
        inchesFeet: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "feet") {
                return val / this.constants.inchesInFoot;
            } else if (convertTo.toLowerCase() == "inches") {
                return val * this.constants.inchesInFoot;
            }
            return false;
        },
        inchesMiles: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "miles") {
                return this.inchesFeet(val, "feet") / this.constants.feetInMile;
            } else if (convertTo.toLowerCase() == "inches") {
                return val * this.constants.feetInMile * this.constants.inchesInFoot;
            }
            return false;
        },
        secondsMinutes: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "seconds") {
                return val * this.constants.secondsInMinute;
            } else if (convertTo.toLowerCase() == "minutes") {
                return val / this.constants.secondsInMinute;
            }
            return false;
        },
        secondsHours: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "seconds") {
                return val * this.constants.secondsInHour;
            } else if (convertTo.toLowerCase() == "hours") {
                return val / this.constants.secondsInHour;
            }
            return false;
        },
        minutesHours: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "minutes") {
                return val * this.constants.minutesInHour;
            } else if (convertTo.toLowerCase() == "hours") {
                return val / this.constants.minutesInHour;
            }
            return false;
        },
        torqueHP: function (val, rpm, convertTo) {
            if (!_.isNumber(val) || !_.isNumber(rpm) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "torque") {
                return val * this.constants.torqueHPConstant / rpm;
            } else if (convertTo.toLowerCase() == "horsepower") {
                return val * rpm / this.constants.torqueHPConstant;
            }
            return false;
        },
        kilogramsSlugs: function (val, convertTo) {
            if (!_.isNumber(val) || !convertTo) {
                return false;
            } else if (convertTo.toLowerCase() == "kilograms") {
                return val * this.constants.kilogramsInSlug;
            } else if (convertTo.toLowerCase() == "slugs") {
                return val / this.constants.kilogramsInSlug;
            }
            return false;
        },
        getTorqueAtRPM: function (val, rpm) {
            return this.torqueHP(val, rpm, "torque");
        },
        getHPAtRPM: function (val, rpm) {
            return this.torqueHP(val, rpm, "horsepower");
        },
        getTireCircInMiles: function (val) {
            return this.inchesMiles(val, "miles");
        },
        getTireCircInFeet: function (val) {
            return this.inchesFeet(val, "feet");
        },
        getRevsPerSecond: function (val) {
            return this.secondsMinutes(val, "seconds");
        },
        getRevsPerHour: function (val) {
            return this.minutesHours(val, "hours");
        },
        getWeightInNewtons: function (val) {
            return this.poundsNewtons(val, "newtons");
        },
        getGripInPounds: function (val) {
            return thispoundsNewtons(val, "pounds");
        },
        getInstantVelocity: function (rpm, gear) {
            return (rpm * this.constants.minutesInHour / this.get("gear" + gear + "Overall")) * this.getTireCircInMiles(this.get("tireCirc"));
        },
        getInstantVelocityInKPH: function (rpm, gear) {
            return this.getInstantVelocity(rpm, gear) * this.constants.kilometersInMile;
        },
        getInstantVelocityInFPS: function (rpm, gear) {
            return this.getInstantVelocity(rpm, gear) * this.constants.feetInMile / this.constants.secondsInHour;
        },
        getInstantVelocityInMPS: function (rpm, gear) {
            return this.getInstantVelocityInKPS(rpm, gear) * 1000;
        }
    });
})(jQuery, window);