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
    var bikeFormView = new _tc.Factory.Views.BikeFormView({
    	el: $(".bikeFormView")
    });
});