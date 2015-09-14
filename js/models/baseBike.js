(function ($, win) {
	_tc.Factory.Models.BaseBike = Backbone.Model.extend({
        proxy: _tc.Utils.proxy,
        defaults: {
            name: "Default Bike",
            image: new _tc.Factory.Components.Image(),
            components: {
                ecu: {
                    stock: {},
                    l1: {},
                    l2: {},
                    l3: {}
                },
                engine: {
                    stock: {
                        level: 1
                    },
                    sparkPlugs: {},
                    porting: {},
                    displacement: {
                        l1: {},
                        l2: {},
                        l3: {}
                    },
                    factory: {
                        l1: {},
                        l2: {}
                    }
                },
                exhaust: {
                    stock: {},
                    lightweight: {
                        l1: {},
                        l2: {},
                        l3: {}
                    },
                    performance: {
                        l1: {},
                        l2: {},
                        l3: {}
                    }
                },
                nitro: {
                    stock: {},
                    l1: {},
                    l2: {},
                    lowCapacity: {
                        l1: {},
                        l2: {},
                        l3: {}
                    },
                    highCapacity: {
                        l1: {},
                        l2: {},
                        l3: {}
                    }
                },
                filter: {
                    stock: {},
                    l1: {},
                    l2: {}
                },
                turbo: {
                    stock: {},
                    l1: {},
                    l2: {},
                    l3: {},
                    l4: {}
                },
                weight: {
                    stock: {},
                    l1: {},
                    l2: {},
                    l3: {}
                },
                wheels: {
                    stock: {},
                    l1: {},
                    l2: {},
                    l3: {},
                    l4: {},
                    l5: {},
                },
                swingArm: {
                    stock: {},
                    l1: {},
                    l2: {},
                    l3: {},
                    l4: {}
                },
                gearbox: {
                    stock: {},
                    l1: {},
                    l2: {},
                    l3: {},
                    l4: {},
                    l5: {}
                }
            },
            specs: {
                name: "Specifications",
                sprockets: {
                    name: "Sprockets",
                    front: new _tc.Factory.Components.FrontSprocket({
                        value: 15
                    }),
                    rear: new _tc.Factory.Components.RearSprocket({
                        value: 46
                    })
                },
                ratios: new _tc.Factory.Components.Ratios({
                    primary: {
                        value: 2.095
                    },
                    secondary: {
                        value: 3.0666666666666666666666666666667 // Calculated
                    },
                    gears: {
                        values: [
                            {
                                value: 2.438
                            },
                            {
                                value: 1.714
                            },
                            {
                                value: 1.333
                            },
                            {
                                value: 1.111
                            },
                            {
                                value: 0.966
                            },
                            {
                                value: 0.852
                            }
                        ]
                    }
                }),
                tires: {
                    name: "Tires",
                    front: new _tc.Factory.Components.Tire({
                        name: "Front Tire",
                        width: {
                            value: 120
                        },
                        ratio: {
                            value: 70
                        },
                        rim: {
                            value: 17
                        },
                        grip: {
                            value: 922
                        },
                        circ: {
                            value: 74.186113134769999387003681153191
                        }
                    }),
                    rear: new _tc.Factory.Components.Tire({
                        name: "Rear Tire",
                        width: {
                            value: 160
                        },
                        ratio: {
                            value: 50
                        },
                        rim: {
                            value: 17
                        },
                        grip: {
                            value: 922
                        },
                        circ: {
                            value: 73.196635133639355847330407646646
                        }
                    })
                },
                wheelBase: new _tc.Factory.Components.WheelBase({
                    value: 1418
                }),
                swingArm: new _tc.Factory.Components.SwingArm(0),
                weights: {
                    // Fill out components when this thing grows. We'll need to know all of the attributes about every part.
                    components: {
                        tires: {
                            front: {

                            },
                            rear: {

                            }
                        },
                        exhaust: {

                        },

                    },
                    bike: {
                        name: "Bike Weights",
                        dry: new _tc.Factory.Components.Weight({
                            name: "Dry Bike Weight",
                            value: 392
                        }),
                        wet: new _tc.Factory.Components.Weight({
                            name: "Wet Bike Weight",
                            value: 460
                        })
                    },
                    rider: new _tc.Factory.Components.Weight({
                        name: "Rider Weight",
                        value: 0
                    })
                },
                torque: new _tc.Factory.Components.Torque({
                    value: 105.2853,
                    rpm: 7000,
                    power: 49.216191509567154110041543014403
                }),
                power: new _tc.Factory.Components.Power({
                    value: 64,
                    rpm: 8500,
                    torque: 39.544470588235294117647058823529
                }),
                nos: new _tc.Factory.Components.Nitrous()
            }
        },
        initialize: function (attrs, options) {
        	this.options = $.extend(true, this.options, options);
            _tc.on(_tc.EventNames.ModelReCalc, this.proxy(this.reCalc));
        },
        reCalc: function (model) {
            if (this.cid == model.cid) {
                this.calcTireGrip()
                .calcWheelBase()
                .calcFinalDrive()
                .calcTireCirc()
                .calcEngineTorque();
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
        calcEngineTorque: function () {
            this.set("maxTorque", this.get("bhp") * this.utils.constants.torqueHPConstant / this.get("maxTorqueRPM"));
            return this;
        },
        calcWheelTorque: function (gear) {
            this.set("maxWheelTorque", this.calcEngineTorque() / this.calcGearOverall(gear));
            return this;
        },
        calcTorqueAtMaxPower: function () {
            this.set("torqueAtMaxPower", this.get("bhp") * this.utils.constants.torqueHPConstant / this.get("maxPowerRPM"));
            return this;
        },
        calcPowerAtMaxTorque: function (){
            this.set("powerAtMaxTorque", this.get("bhp") * this.utils.constants.torqueHPConstant / this.get("maxPowerRPM"));
            return this;
        }
    });
})(jQuery, window);