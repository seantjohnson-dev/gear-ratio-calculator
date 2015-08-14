;(function ($, win) {

	win._tc.Models.base = Backbone.Model.extend({
		constants: {
			feetPerMile: 5280,
			newtonsPerPound: 4.44822162,
			millimetersPerInch: 25.4
	    },
        proxy: proxy,
        constructor: function () {
            this.sprocketDrive = getSprocketDrive.apply(this, arguments);
        },
        defaults: {
            nosBHP: 0,
            nosDuration: 3.0,            
            tirePressure: 100
        },
        proxy: function (func) {
	        var self = this;
	        return function() {
	            return func.apply(self, arguments);
	        };
	    },
        _calculateGrip: function () {
        	return ((this.defaults.grip / this.defaults.weight) * this.get("weight") / this.get("tirePressure"));
        },
        _getTotalGearDrive: function (gear) {
        	if (_.isString(gear) || _.isNumber(parseInt(gear))) {
            	gear = parseInt(gear);
        	}
	        if (gear < 1 || gear > 6) {
	            throw "Invalid Gear Value Supplied to _getTotalGearDrive. The gear value passed needs to be 1-6 as a string or an integer.";
	        }
	        return (this.get("primary") * this._getSprocketDrive() * this.get("gear" + gear + "Ratio"));
        },
        _getSprocketDrive: function () {
        	return (this.get("rearSprocket") / this.get("frontSprocket"));
        }
    });
})(jQuery, win);