$(function () {
	Handlebars.registerHelper("debug", function(optionalValue) {
	  console.log("Current Context");
	  console.log("====================");
	  console.log(this);
	 
	  if (optionalValue) {
	    console.log("Value");
	    console.log("====================");
	    console.log(optionalValue);
	  }
	});
	Handlebars.registerHelper("compare", function (v1, v2, options) {
		if (v1 == v2) {
			return options.fn(this);
		}
		return options.inverse(this);
	});
    Backbone.history.start({pushState: true, hashChange: false});
    var bikeFormView = new _tc.Factory.Views.bikeFormView({
    	el: $(".bikeFormView")
    });

    var maxRPM = 15000;
    var bhp = 139.5;
    for (var rpm = 500; rpm <= maxRPM; rpm++) {
    	if (rpm == 9500) {
    		console.log("Torque: " + (bhp * 5252 / rpm), "RPM: " + rpm);
    	}
    }
    var model = {
    	name: "",
    	image: "",
    	details: {
    		frontSprocket: {
    			min: 10,
    			max: 19,
    			value: 16
    		},
    		rearSprocket: {
    			min: 35,
    			max: 55,
    			value: 40
    		},
    		ratios: {
    			primary: 1.555,
    			secondary: {
    				front: [{}],
    				rear: [{}]
    			},
    			gears: [{}],
    			overalls: [{}]
    		},
    		tires: {
    			front: {
    				width: 190,
    				aspectRatio: 50,
    				rimSize: 17,
    				pressure: {
    					min: 90,
    					max: 110,
    					value: 100
    				}
    			},
    			rear: {
    				width: 190,
    				aspectRatio: 50,
    				rimSize: 17,
    				pressure: {
    					min: 90,
    					max: 110,
    					value: 100
    				}
    			}
    		},
    		dimensions: {
    			wheelBase: 1418,
    			rearTireCirc: 76.9135363,
    			frontTireCirc: 76.9135363
    		},
    		forces: {
    			bikeWeight: 465,
    			riderWeight: 122,

    			rearTireGrip: 1518,
    			torque: {
    				flywheel: {
    					atMaxRPM: 105.2853,
    					atMaxPowerRPM: 101.15335
    				},
    				wheelAtGear: [{}]
    			}
    		},
    		horsepower: {
    			flywheel: 465,
    			nos: 58,
    			wheel: 307
    		}
    	}
    }
});