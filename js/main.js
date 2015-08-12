$(function () {

    var tireSpecs = {
        level1: 0.15,
        level2: 0.2,
        level3: 0.28,
        level4: 0.35,
        level5: 0.4
    },
    swingarms = {
        level1: 0.03,
        level2: 0.05,
        level3: 0.06,
        level4: 0.07
    },
    bikes = {
        // Collectable Bikes
        hdxl1200: {
            primary: 2.095,
            tireCirc: 77.15 / 12,
            maxRPM: 6000
        },
        trophy1949: {
            primary: 2.095,
            tireCirc: 77.15 / 12,
            maxRPM: 12000
        },
        v92sc: {
            primary: 2.095,
            tireCirc: 77.15 / 12,
            maxRPM: 12000
        },
        // Real Bikes
        ninja650: {
            primary: 2.095,
            tireCirc: 77.15 / 12,
            maxRPM: 12000,
            wheelbase: 1410 // Millimeters
            bhp: 64,
            weight: 392,
            grip: 922,
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 3,
                        weight: 0
                    },
                    porting: {
                        bhp: 5,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 12,
                        weight: 2
                    },
                    displacement2: {
                        bhp: 16,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 23,
                        weight: 15
                    },
                    motor1: {
                        bhp: 19,
                        weight: 0
                    },
                    motor2: {
                        bhp: 25,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 1
                    },
                    remapping2: {
                        bhp: 3
                    },
                    remapping3: {
                        bhp: 4
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -7
                    },
                    lightweight2: {
                        bhp: 1,
                        weight: -7
                    },
                    lightweight3: {
                        bhp: 3,
                        weight: -7
                    },
                    performance1: {
                        bhp: 1,
                        weight: 0
                    },
                    performance2: {
                        bhp: 1,
                        weight: 0
                    },
                    performance3: {
                        bhp: 3,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 5
                    },
                    stage2: {
                        bhp: 9
                    },
                    lowCapacity: {
                        bhp: 12
                    },
                    lowCapacity2: {
                        bhp: 13
                    },
                    lowCapacity3: {
                        bhp: 14
                    },
                    highCapacity: {
                        bhp: 13
                    },
                    highCapacity2: {
                        bhp: 16
                    },
                    highCapacity3: {
                        bhp: 17
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 21,
                        weight: 2
                    },
                    stage2: {
                        bhp: 28,
                        weight: 11
                    },
                    stage3: {
                        bhp: 35,
                        weight: 11
                    },
                    stage4: {
                        bhp: 28,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 3
                    },
                    stage2: {
                        bhp: 4
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -16
                    },
                    stage3: {
                        weight: -20
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        shiverGT: {
            primary: 1.75, // was 1.8684
            tireCirc: 77.9 / 12,
            maxRPM: 12000,
            wheelbase: 1440,
            stock: {
                bhp: 96,
                weight: 416,
                grip: 968
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        thundercat: {
            primary: 1.708,
            tireCirc: 77.15 / 12,
            maxRPM: 15000,
            wheelbase: 1415,
            stock: {
                bhp: 97,
                weight: 416,
                grip: 959
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        mille: {
            primary: 1.9354,
            tireCirc: 76.91 / 12,
            maxRPM: 12000,
            wheelbase: 1418,
            stock: {
                bhp: 140,
                weight: 416,
                grip: 956
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        boxer: {
            primary: 1.737,
            tireCirc: 71.96 / 12,
            maxRPM: 9500,
            wheelbase: 1485,
            stock: {
                bhp: 130,
                weight: 392,
                grip: 1018
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        k1200s: {
            primary: 1.559,
            tireCirc: 76.91 / 12,
            maxRPM: 11000,
            wheelbase: 1570,
            stock: {
                bhp: 164,
                weight: 498,
                grip: 1080
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        superBlackbird: {
            primary: 1.571,
            tireCirc: 77.9 / 12,
            maxRPM: 11000,
            wheelbase: 1490,
            stock: {
                bhp: 150,
                weight: 500,
                grip: 1233
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        b1125: {
            primary: 1.8055,
            tireCirc: 77.9 / 12,
            maxRPM: 10500,
            wheelbase: 1384,
            stock: {
                bhp: 146,
                weight: 368,
                grip: 1008
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        tripleNine: {
            primary: 1.84,
            tireCirc: 76.91 / 12,
            maxRPM: 11000,
            wheelbase: 1420,
            stock: {
                bhp: 147,
                weight: 399,
                grip: 1262
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        slingshot: {
            primary: 1.974,
            tireCirc: 77.9 / 12,
            maxRPM: 15000,
            wheelbase: 1400,
            stock: {
                bhp: 146,
                weight: 368,
                grip: 1156
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        superSlingshot: {
            primary: 1.617,
            tireCirc: 76.91 / 12,
            maxRPM: 13500,
            wheelbase: 1415,
            stock: {
                bhp: 183,
                weight: 396,
                grip: 1068
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        ninja1000r: {
            primary: 1.681,
            tireCirc: 79.26 / 12,
            maxRPM: 14000,
            wheelbase: 1389,
            stock: {
                bhp: 197,
                weight: 394,
                grip: 1170
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        ninja1400: {
            primary: 1.556,
            tireCirc: 76.91 / 12,
            maxRPM: 11000,
            wheelbase: 1461,
            stock: {
                bhp: 187,
                weight: 473,
                grip: 1364
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        f41000r: {
            primary:  1.7083,
            tireCirc: 79.26 / 12,
            maxRPM: 13500,
            wheelbase: 1430,
            stock: {
                bhp: 182,
                weight: 423,
                grip: 1225
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        castiglioni: {
            primary: 1.58,
            tireCirc: 79.26 / 12,
            maxRPM: 13500,
            wheelbase: 1430,
            stock: {
                bhp: 197,
                weight: 412,
                grip: 1241
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        busa: {
            primary: 1.596,
            tireCirc: 76.91 / 12,
            maxRPM: 12500,
            wheelbase: 1480,
            stock: {
                bhp: 195,
                weight: 485,
                grip: 1305
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        },
        yzf1000: {
            primary: 1.512,
            tireCirc: 79.26 / 12,
            maxRPM: 14000,
            wheelbase: 1415,
            stock: {
                bhp: 178,
                weight: 390,
                grip: 1161
            },
            upgrades: {
                engine: {
                    plugs: {
                        bhp: 4,
                        weight: 0
                    },
                    porting: {
                        bhp: 11,
                        weight: 0
                    },
                    displacement1: {
                        bhp: 20,
                        weight: 7
                    },
                    displacement2: {
                        bhp: 24,
                        weight: 11
                    },
                    displacement3: {
                        bhp: 35,
                        weight: 16
                    },
                    motor1: {
                        bhp: 28,
                        weight: 0
                    },
                    motor2: {
                        bhp: 39,
                        weight: 22
                    }
                },
                ecu: {
                    remapping1: {
                        bhp: 3
                    },
                    remapping2: {
                        bhp: 4
                    },
                    remapping3: {
                        bhp: 7
                    }
                },
                exhaust: {
                    lightweight1: {
                        bhp: 0,
                        weight: -6
                    },
                    lightweight2: {
                        bhp: 3,
                        weight: -6
                    },
                    lightweight3: {
                        bhp: 4,
                        weight: -6
                    },
                    performance1: {
                        bhp: 3,
                        weight: 0
                    },
                    performance2: {
                        bhp: 4,
                        weight: 0
                    },
                    performance3: {
                        bhp: 5,
                        weight: 0
                    }
                },
                nitro: {
                    stage1: {
                        bhp: 9
                    },
                    stage2: {
                        bhp: 14
                    },
                    lowCapacity1: {
                        bhp: 17
                    },
                    lowCapacity2: {
                        bhp: 21
                    },
                    lowCapacity3: {
                        bhp: 22
                    },
                    highCapacity1: {
                        bhp: 20
                    },
                    highCapacity2: {
                        bhp: 24
                    },
                    highCapacity3: {
                        bhp: 26
                    }
                },
                turbo: {
                    stage1: {
                        bhp: 20,
                        weight: 5
                    },
                    stage2: {
                        bhp: 34,
                        weight: 11
                    },
                    stage3: {
                        bhp: 50,
                        weight: 11
                    },
                    stage4: {
                        bhp: 44,
                        weight: 2
                    }
                },
                filter: {
                    stage1: {
                        bhp: 4
                    },
                    stage2: {
                        bhp: 7
                    }
                },
                weight: {
                    stage1: {
                        weight: -11
                    },
                    stage2: {
                        weight: -17
                    },
                    stage3: {
                        weight: -22
                    }
                },
                wheels: {
                    stage1: {
                        weight: -9
                    },
                    stage2: {
                        weight: -13
                    }
                }
            }
        }
    }
    var constants = {
      feetPerMile: 5280,
      newtonsPerPound: 4.44822162
    },
    factors = {},
    elems = {
      $bhp: $("#bhp"),
      $nosBHP: $("#nos-bhp"),
      $nosGear: $("#nos-gear"),
      $nosDuration: $("#nos-duration"),
      $bikeWeight: $("#weight"),
      $pRatio: $("#prim-rat"),
      $maxRPM: $("#max-rpm"),
      $frontSprocket: $("#front-sprocket"),
      $rearSprocket: $("#rear-sprocket"),
      $gear1Ratio: $("#gear-1-ratio"),
      $gear2Ratio: $("#gear-2-ratio"),
      $gear3Ratio: $("#gear-3-ratio"),
      $gear4Ratio: $("#gear-4-ratio"),
      $gear5Ratio: $("#gear-5-ratio"),
      $gear6Ratio: $("#gear-6-ratio"),
      $tireGrip: $("#tire-grip"),
      $tireCirc: $("#tire-circ"),
      $primary: $("#primary")
    };

    function getSetValues() {
        factors.bhp = parseInt(elems.$bhp.val());
        factors.nosBHP = parseInt(elems.$nosBHP.val());
        factors.nosGear = parseInt(elems.$nosGear.val());
        factors.nosDuration = parseFloat(elems.$nosDuration.val()) / 1000;
        factors.bikeWeight = parseInt(elems.$bikeWeight.val());
        factors.pRatio = parseFloat(elems.$pRatio.val());
        factors.maxRPM = parseInt(elems.$maxRPM.val());
        factors.frontSprocket = parseInt(elems.$frontSprocket.val());
        factors.rearSprocket  = parseInt(elems.$rearSprocket.val());
        factors.gear1Ratio = parseFloat(elems.$gear1Ratio.val());
        factors.gear2Ratio = parseFloat(elems.$gear2Ratio.val());
        factors.gear3Ratio = parseFloat(elems.$gear3Ratio.val()),
        factors.gear4Ratio = parseFloat(elems.$gear4Ratio.val());
        factors.gear5Ratio = parseFloat(elems.$gear5Ratio.val());
        factors.gear6Ratio = parseFloat(elems.$gear6Ratio.val());
        factors.tireGrip = parseInt(elems.$tireGrip.val()) / constants.newtonsPerPound;
        factors.finalDrive = factors.rearSprocket / factors.frontSprocket;

    }

    function popInputsFromBike(val) {
        for (var i in bikes) {
            if (val === i) {
                elems.$primary.val(bikes[i].primary);
                elems.$tireCirc.val(bikes[i].tireCirc);
                elems.$maxRPM.val(bikes[i].maxRPM);
                break;
            }
        }
    }

    function clearInputsFromBike() {
        elems.$primary.val("");
        elems.$tireCirc.val("");
        elems.$maxRPM.val("");
    }

    $("#bike-select").change(function (e) {
        var val = $(e.currentTarget).find("option:selected").val();
        if (val && val !== "") {
            popInputsFromBike(val);
        } else {
            clearInputsFromBike();
        }
    });

    $("#bike-calc").submit(function (e) {
        e.preventDefault();
        getSetValues();
    });
});