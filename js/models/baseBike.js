(function ($, win) {
	_tc.Factory.Models.BaseBike = Backbone.Model.extend({
        proxy: _tc.Utils.proxy,
        defaults: {
            name: "Default Bike",
            image: new _tc.Factory.Components.Image(),
            components: {
                ecu: {
                    stock: {
                        level: 1,
                        name: "Stock ECU"
                    },
                    l1: {
                        level: 1,
                        name: "ECU Remapping 1",
                        hp: 1
                     },
                    l2: {
                        level: 1,
                        name: "ECU Remapping 2",
                        hp: 1
                    },
                    l3: {
                        level: 1,
                        name: "ECU Remapping 3",
                        hp: 2
                    }
                },
                engine: {
                    stock: {
                        level: 1,
                        name: "Stock Engine"
                    },
                    l1: {
                        level: 1,
                        name: "Performance Spark Plugs",
                        hp: 1
                    },
                    l2: {
                        level: 1,
                        name: "Cylinder Porting",
                        hp: 4
                    },
                    displacement: {
                        l1: {
                            level: 1,
                            name: "Displacement Increase",
                            hp: 6,
                            weight: 2
                        },
                        l2: {
                            level: 1,
                            name: "Displacement Increase 2",
                            hp: 9,
                            weight: 2
                        },
                        l3: {
                            level: 1,
                            name: "Displacement Increase 3",
                            hp: 14,
                            weight: 2
                        }
                    },
                    factory: {
                        l1: {
                            level: 1,
                            name: "Factory Motor Kit",
                            hp: 10
                        },
                        l2: {
                            level: 1,
                            name: "Factory Motor Kit 2",
                            hp: 17,
                            weight: 4
                        }
                    }
                },
                exhaust: {
                    stock: {
                        level: 1,
                        name: "Stock Exhaust"
                    },
                    lightweight: {
                        l1: {
                            level: 1,
                            name: "Lightweight Exhaust",
                            hp: 2,
                            weight: 2
                        },
                        l2: {
                            level: 1,
                            name: "Upgraded Lightweight Race Exhaust",
                            hp: 4,
                            weight: 2
                        },
                        l3: {
                            level: 2,
                            name: "Custom Lightweight Race Exhaust",
                            hp: 5,
                            weight: 2
                        }
                    },
                    performance: {
                        l1: {
                            level: 1,
                            name: "Slip-on Performance Exhaust",
                            hp: 1
                        },
                        l2: {
                            level: 1,
                            name: "High Performance Race Exhaust",
                            hp: 2
                        },
                        l3: {
                            level: 2,
                            name: "Custom Race Exhaust",
                            hp: 4
                        }
                    }
                },
                nitro: {
                    stock: {
                        level: 1,
                        name: "No Nitrous"
                    },
                    l1: {
                        level: 1,
                        name: "Nitrous Kit",
                        hp: 8
                    },
                    l2: {
                        level: 1,
                        name: "Nitrous Kit",
                        hp: 12
                    },
                    lowCapacity: {
                        l1: {
                            level: 1,
                            name: "Nitrous Kit Low Capacity",
                            hp: 14
                        },
                        l2: {
                            level: 1,
                            name: "Nitrous Kit Low Capacity 2",
                            hp: 17
                        },
                        l3: {
                            level: 2,
                            name: "Nitrous Kit Low Capacity 3",
                            hp: 18
                        }
                    },
                    highCapacity: {
                        l1: {
                            level: 2,
                            name: "Nitrous Kit High Capacity",
                            hp: 16
                        },
                        l2: {
                            level: 2,
                            name: "Nitrous Kit High Capacity 2",
                            hp: 18
                        },
                        l3: {
                            level: 2,
                            name: "Nitrous Kit High Capacity 3",
                            hp: 21
                        }
                    }
                },
                intake: {
                    stock: {
                        level: 1,
                        name: "Stock Intake",
                        hp: 0
                    },
                    l1: {
                        level: 1,
                        name: "Performance Air Filter",
                        hp: 4
                    },
                    l2: {
                        level: 1,
                        name: "Racing Intake Setup",
                        hp: 6
                    }
                },
                turbo: {
                    stock: {
                        level: 1,
                        name: "No Turbo",
                        hp: 0
                    },
                    l1: {
                        level: 1,
                        name: "Turbo Kit",
                        hp: 18,
                        weight: 2
                    },
                    l2: {
                        level: 1,
                        name: "Turbo Kit 2",
                        hp: 26,
                        weight: 2
                    },
                    l3: {
                        level: 1,
                        name: "Turbo Kit 3",
                        hp: 41,
                        weight: 4
                    },
                    l4: {
                        level: 1,
                        name: "Turbo Kit 4",
                        hp: 36,
                        weight: 2
                    }
                },
                weight: {
                    stock: {
                        level: 1,
                        name: "Stock Bike",
                        weight: 0
                    },
                    l1: {
                        level: 1,
                        name: "Weight Reduction Kit",
                        weight: -11
                    },
                    l2: {
                        level: 1,
                        name: "Weight Reduction Kit 2",
                        weight: -17
                    },
                    l3: {
                        level: 1,
                        name: "Weight Reduction Kit 3",
                        weight: -22
                    }
                },
                wheels: {
                    stock: {
                        level: 1,
                        name: "Stock Wheels",
                        weight: 0
                    },
                    l1: {
                        level: 1,
                        name: "Lighter Wheels",
                        weight: -8
                    },
                    l2: {
                        level: 2,
                        name: "Ultra Lightweight Wheels",
                        weight: -13
                    }
                },
                tires: {
                    stock: {
                        level: 1,
                        name: "Stock Tires",
                        grip: 0
                    },
                    l1: {
                        level: 1,
                        name: "Upgraded Street Tires",
                        grip: 0.15
                    },
                    l2: {
                        level: 1,
                        name: "Dual-Compound Street Tires",
                        grip: 0.20
                    },
                    l3: {
                        level: 1,
                        name: "DOT Race Tires",
                        grip: 0.28
                    },
                    l4: {
                        level: 1,
                        name: "NON-DOT Race Tires",
                        grip: 0.35
                    },
                    l5: {
                        level: 1,
                        name: "NON-DOT Race Slicks",
                        grip: 0.40
                    }
                },
                swingArm: {
                    stock: {
                        level: 1,
                        name: "Stock Swingarm",
                        wheelBase: 0
                    },
                    l1: {
                        level: 1,
                        name: "Swingarm 1",
                        wheelBase: 0.03
                    },
                    l2: {
                        level: 1,
                        name: "Swingarm 2",
                        wheelBase: 0.05
                    },
                    l3: {
                        level: 1,
                        name: "Swingarm 3",
                        wheelBase: 0.06
                    },
                    l4: {
                        level: 1,
                        name: "Swingarm 4",
                        wheelBase: 0.07
                    }
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