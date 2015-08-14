;(function ($, win) {
	_tc.bikeDefaults.castiglioni = $.extend(true, {}, _tc.bikeDefaults.f41000r, {
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
	_tc.Models.castiglioni = _tc.Models.base.extend(_tc.bikeDefaults.castiglioni);
})(jQuery, window);