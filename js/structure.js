{
	defaults: {
                name: "Ninja 650",
                image: {
                    src: "/img/ninja650.png"
                },
                specs: {
                    sprockets {
                        front: {
                            value: 15
                        },
                        rear: {
                            value: 46
                        }
                    },
                    ratios: {
                        primaryDrive: {
                            value: 2.095
                        },
                        secondaryDrive: {
                            value: 3.0666666666666666666666666666667 // Calculated
                        },
                        both: {
                            value: 6.4246666666666666666666666666667
                        },
                        gears: {
                            values: [
                                2.438,
                                1.714,
                                1.333,
                                1.111,
                                0.966,
                                0.852
                            ]
                        },
                        overall: {
                            gears: [
                                15.663337333333333333333333333333,
                                11.011878666666666666666666666667,
                                8.5640806666666666666666666666668,
                                7.1378046666666666666666666666667,
                                6.206228,
                                5.473816
                            ]
                        }
                    },
                    tires: {
                        front: {
                            width: {
                                value: 120
                            },
                            ratio: {
                                value: 70
                            },
                            rim: {
                                value: 17
                            },
                            pressure: {
                                value: 100
                            },
                            circ: {
                                value: 74.186113134769999387003681153191
                            }
                        },
                        rear: {
                            width: {
                                value: 160
                            },
                            ratio: {
                                value: 50
                            },
                            rim: {
                                value: 17
                            },
                            pressure: {
                                value: 100
                            },
                            circ: {
                                value: 73.196635133639355847330407646646
                            }
                        }
                    },
                    wheelBase: {
                        value: 1418,
                        swingArm: {
                            value: 0.00
                        }
                    },
                    weights: {
                        bike: {
                            dry: 392,
                            wet: 460
                        },
                        rider: {
                            value: 0
                        }
                    },
                    grip: {
                        rear: 922
                    },
                    torque: {
                        maxRPM: 7000,
                        value: 105.2853,
                        power: 49.216191509567154110041543014403
                        // rear: []
                    },
                    power: {
                        maxRPM: 8500,
                        value: 64,
                        torque: 39.544470588235294117647058823529,
                        nos: {
                            duration: {
                                value: 3.0
                            },
                            power: {
                                value: 0
                            }
                        }
                        // rear: []
                    }
                }
            }
}