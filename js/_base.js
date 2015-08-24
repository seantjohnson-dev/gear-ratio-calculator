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

    function getNewTimeStamp() {
        return {
            velocity: {
                gear1: [],
                gear2: [],
                gear3: [],
                gear4: [],
                gear5: [],
                gear6: []
            },
            acceleration: {
                gear1: [],
                gear2: [],
                gear3: [],
                gear4: [],
                gear5: [],
                gear6: []
            },
            displacement: {
                gear1: [],
                gear2: [],
                gear3: [],
                gear4: [],
                gear5: [],
                gear6: []
            }
        };
    }

	_tc.Factory.Models.baseModel = Backbone.Model.extend({
        proxy: _tc.Utils.proxy,
        timeStamps: [],
        utils: {
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
                minutesInHour: 60
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
        },
        initialize: function (attrs, options) {
        	this.options = $.extend(true, this.options, options);
            _tc.on(_tc.EventNames.ModelReCalc, this.proxy(this.reCalc));
        },
        reCalc: function (model) {
            if (this.cid == model.cid) {
                this.calcTireGrip().calcWheelBase().calcFinalDrive().calcTireCirc().calcMaxTorque();
                for (var g = 1, l = this.utils.constants.totalGears; g <= l; g++) {
                    this.calcGearOverall(g);
                }
            }
        	return this;
        },
        calcTireCirc: function () {
            this.set("tireCirc", (this.utils.inchesMillimeters(this.get("tireWidth"), "inches")) * (this.get("aspectRatio") / 100) + (this.get("rimSize") / 2)) * 2 * Math.PI;
            return this;
        },
        calcTireGrip: function () {
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
        },
        calcMaxTorque: function () {
            this.set("maxTorque", this.get("bhp") * this.utils.constants.torqueHPConstant / this.get("maxTorqueRPM"));
            return this;
        },
        calcWheelTorqueAtGear: function (gear) {
            this.set("maxWheelTorque", this.calcMaxTorque() / this.calcGearOverall(gear));
            return this;
        }
    });

	_tc.Factory.Collections.baseCollection = Backbone.Collection.extend({
		model: _tc.Factory.Models.baseModel
	});


})(jQuery, window);