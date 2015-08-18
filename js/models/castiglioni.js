;(function ($, win) {
	 _tc.Factory.Defaults.castiglioni = {
		name: "Castiglioni",
		defaults: {
	        primary: 1.58,
	        bhp: 197,
	        weight: 412,
	        grip: 1241,
	        rearSprocket: 39,
	        gear6Ratio: 1.19
	    }
	};
	_tc.bikes.push(new _tc.Factory.Models.baseModel($.extend(true, {}, _tc.Factory.Defaults.f41000r, _tc.Factory.Defaults.castiglioni)));
})(jQuery, window);