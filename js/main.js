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
    var formView = new _tc.Factory.Views.formView({
    	el: $(".formView")
    });

    var maxRPM = 15000;
    var bhp = 139.5;
    for (var rpm = 1; rpm <= maxRPM; rpm++) {
    	console.log("Torque: " + (bhp * 5252 / rpm), "RPM: " + rpm);
    }
});