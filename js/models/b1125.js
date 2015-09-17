;(function ($, win) {
  _tc.Factory.Defaults.b1125 = {
    defaults: {
      parts: {
        ecu: {
          stock: {
            level: 4
          },
          l1: {
            level: 4,
            hp: 4
          },
          l2: {
            level: 5,
            hp: 8
          },
          l3: {
            level: 7,
            hp: 10
          }
        },
        engine: {
          stock: {
            level: 4,
            hp: 0
          },
          sparkPlugs: {
            level: 4,
            hp: 8
          },
          porting: {
            level: 5,
            hp: 14
          },
          displacement: {
            l1: {
              level: 6,
              hp: 29,
              weight: 6
            },
            l2: {
              level: 6
              hp: 36,
              weight: 11
            },
            l3: {
              level: 8,
              hp: 59,
              weight: 15
            }
          },
          factory: {
            l1: {
             level: 7,
             hp: 44
            },
            l2: {
              level: 8,
              hp: 65,
              weight: 22
            }
          }
        },
        exhaust: {
          stock: {},
          lightweight: {
            l1: {

            },
            l2: {

            },
            l3: {

            }
          },
          performance: {
            l1: {

            },
            l2: {

            },
            l3: {

            }
          }
        },
        nitro: {
          stock: {

          },
          l1: {

          },
          l2: {

          },
          lowCapacity: {
            l1: {

            },
            l2: {

            },
            l3: {

            }
          },
          highCapacity: {
            l1: {

            },
            l2: {

            },
            l3: {

            }
          }
        },
        filter: {
          stock: {

          },
          l1: {

          },
          l2: {

          }
        },
        turbo: {
          stock: {

          },
          l1: {

          },
          l2: {

          },
          l3: {

          },
          l4: {

          }
        },
        weight: {
          stock: {

          },
          l1: {

          },
          l2: {

          },
          l3: {

          }
        },
        wheels: {
          stock: {

          },
          l1: {

          },
          l2: {

          },
          l3: {

          },
          l4: {

          },
          l5: {

          }
        },
        swingArm: {
          stock: {

          },
          l1: {

          },
          l2: {

          },
          l3: {

          },
          l4: {

          }
        },
        gearbox: {
          stock: {

          },
          l1: {

          },
          l2: {

          },
          l3: {

          },
          l4: {

          },
          l5: {

          }
        }
      },
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
  _tc.bikes.push(new _tc.Factory.Models.BaseBike($.extend({}, _tc.Factory.Defaults.b1125, _tc.Factory.Defaults.b1125.defaults)));
})(jQuery, window);