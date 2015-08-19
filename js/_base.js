;(function ($, win) {
	win.TuneCalc = win._tc = $.extend(true, {}, Backbone.Events, {
		EventNames: {
			FieldChanged: "FieldChanged",
			TemplateReceived: "TemplateReceived",
			ModelReCalc: "ModelReCalc"
		},
		Utils: {
			proxy: function (func) {
	            var self = this;
	            return function() {
	                return func.apply(self, arguments);
	            };
	        }
		},
		Factory: {
			Models: {},
			Views: {},
			Collections: {},
			Defaults: {}
		},
		bikes: []
	});


	_tc.Factory.Views.baseView = Backbone.View.extend({
		proxy: _tc.Utils.proxy,
		options: {},
		model: {},
		events: function () {
			var evts = {};
			return evts;
		},
		initialize: function (options) {
			this.options = $.extend(true, this.options, options);
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	_tc.Factory.Models.baseModel = Backbone.Model.extend({
        proxy: _tc.Utils.proxy,
        utils: {
            constants: {
                newtonsInPound: 4.44822162,
                inchesInFoot: 12,
                totalGears: 6,
                torqueToHP: 5252,
                gearRatioMin: 0.4,
                gearRatioMax: 5.0,
                gravityInMeters: 9.80665
                gravityInFeet: 32.17404856,
                feetInMile: 5280,
                feetInMeter: 3.28084,
                kilometersInMile: 1.60934,
                millimetersInInch: 25.4,
                secondsInMinute: 60,
                secondsInHour: 3600,
                minutesInHour: 60
            },
            poundsNewtons: function (val, convertTo) {
                if (!_.isNumber(val) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "pounds") {
                    return val / this.utils.constants.newtonsInPound;
                } else if (convertTo.toLowerCase() == "newtons") {
                    return val * this.utils.constants.newtonsInPound;
                }
                return false;
            },
            inchesMillimeters: function (val, convertTo) {
                if (!_.isNumber(val) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "millimeters") {
                    val * this.utils.constants.millimetersInInch;
                } else if (convertTo.toLowerCase() == "inches") {
                    val / this.utils.constants.millimetersInInch;
                }
                return false;
            },
            inchesFeet: function (val, convertTo) {
                if (!_.isNumber(val) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "feet") {
                    return val / this.utils.constants.inchesInFoot;
                } else if (convertTo.toLowerCase() == "inches") {
                    return val * this.utils.constants.inchesInFoot;
                }
                return false;
            },
            inchesMiles: function (val, convertTo) {
                if (!_.isNumber(val) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "miles") {
                    return this.inchesFeet(val, "feet") / this.utils.constants.feetInMile;
                } else if (convertTo.toLowerCase() == "inches") {
                    return val * this.utils.constants.feetInMile * this.utils.constants.inchesInFoot;
                }
                return false;
            },
            secondsMinutes: function (val, convertTo) {
                if (!_.isNumber(val) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "seconds") {
                    return val * this.utils.constants.secondsInMinute;
                } else if (convertTo.toLowerCase() == "minutes") {
                    return val / this.utils.constants.secondsInMinute;
                }
                return false;
            },
            secondsHours: function (val, convertTo) {
                if (!_.isNumber(val) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "seconds") {
                    return val * this.utils.constants.secondsInHour;
                } else if (convertTo.toLowerCase() == "hours") {
                    return val / this.utils.constants.secondsInHour;
                }
                return false;
            },
            minutesHours: function (val, convertTo) {
                if (!_.isNumber(val) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "minutes") {
                    return val * this.utils.constants.minutesInHour;
                } else if (convertTo.toLowerCase() == "hours") {
                    return val / this.utils.constants.minutesInHour;
                }
                return false;
            },
            torqueHP: function (val, rpm, convertTo) {
                if (!_.isNumber(val) || !_.isNumber(rpm) || !convertTo) {
                    return false;
                } else if (convertTo.toLowerCase() == "torque") {
                    return val * this.utils.constants.torqueToHP / rpm;
                } else if (convertTo.toLowerCase() == "horsepower") {
                    return val * rpm / this.utils.constants.torqueToHP;
                }
                return false;
            },
            getTorqueAtRPM: function (val, rpm) {
                return this.utils.torqueHP(val, rpm, "torque");
            },
            getHPAtRPM: function (val, rpm) {
                return this.utils.torqueHP(val, rpm, "horsepower");
            },
            getTireCircInMiles: function (val) {
                return this.utils.inchesMiles(val, "miles");
            },
            getTireCircInFeet: function (val) {
                return this.utils.inchesFeet(val, "feet");
            },
            getRevsPerSecond: function (val) {
                return this.utils.secondsMinutes(val, "seconds");
            },
            getRevsPerHour: function (val) {
                return this.utils.minutesHours(val, "hours");
            },
            getWeightInNewtons: function (val) {
                return this.utils.poundsNewtons(val, "newtons");
            },
            getGripInPounds: function (val) {
                return this.utils.poundsNewtons(val, "pounds");
            },
            getInstantVelocity: function (rpm, gear) {
                return (rpm * this.utils.constants.minutesInHour / this.get("gear" + gear + "Overall")) * this.utils.getTireCircInMiles(this.get("tireCirc"));
            },
            getInstantVelocityInKPH: function (rpm, gear) {
                return this.utils.getInstantVelocity(rpm, gear) * this.utils.constants.kilometersInMile;
            },
            getInstantVelocityInFPS: function (rpm, gear) {
                return this.getInstantVelocity(rpm, gear) * this.utils.constants.feetInMile / this.utils.constants.secondsInHour;
            },
            getInstantVelocityInMPS: function (rpm, gear) {
                return this.utils.getInstantVelocityInKPS(rpm, gear) * 1000;
            }
        },
        initialize: function (attrs, options) {
        	this.options = $.extend(true, this.options, options);
        },
        reCalc: function () {
            this.calcGrip().calcWheelBase().calcFinalDrive();
            for (var g = 1, l = this.utils.constants.totalGears; g <= l; g++) {
                this.calcGearOverall(g);
            }
        	return this;
        },
        calcGrip: function () {
        	this.set("grip", Math.round((this.attributes.defaults.grip / (this.attributes.defaults.weight * this.utils.constants.newtonsInPound)) * (this.get("weight") * this.utils.constants.newtonsInPound) / this.get("tirePressure")));
        	return this;
        },
        calcWheelBase: function () {
        	this.set("wheelBase", this.attributes.defaults.wheelBase + (this.get("wheelBase") * this.get("swingArm")));
        	return this;
        },
        calcFinalDrive: function () {
        	this.set("finalDrive", (this.get("rearSprocket") / this.get("frontSprocket")));
        	return this;
        },
        calcGearOverall: function (gear) {
        	if (gear > 0 && gear < 7) {
        		this.set("gear" + gear + "Overall", (this.get("primaryDrive") * this.get("finalDrive") * this.get("gear" + gear + "Ratio")));
        	}
        	return this;
        }
    });

	_tc.Factory.Collections.baseCollection = Backbone.Collection.extend({
		model: _tc.Factory.Models.baseModel
	});


})(jQuery, window);