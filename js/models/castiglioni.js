;(function ($, win) {
	 _tc.Factory.Defaults.castiglioni = $.extend(true, {}, _tc.Factory.Defaults.f41000r, {
    	defaults: $.extend({}, _tc.Factory.Defaults.f41000r.defaults, {
            name: "Castiglioni",
            primaryDrive: 1.58,
            maxPowerRPM: 12200,
            maxTorqueRPM: 9000,
            bhp: 197,
            weight: 412,
            grip: 1241,
            rearSprocket: 39,
            gear6Ratio: 1.19
        })
    });
	_tc.bikes.push(new _tc.Factory.Models.BaseBike($.extend({}, _tc.Factory.Defaults.castiglioni, _tc.Factory.Defaults.castiglioni.defaults)));
})(jQuery, window);