;(function ($, win) {
	win.TuneCalc = win._tc = $.extend(true, {}, Backbone.Events, {
		EventNames: {
			FieldChanged: "FieldChanged",
			BikeChanged: "BikeChanged"
		},
		Templates: {},
		Utils: {
			proxy: function (func) {
	            var self = this;
	            return function() {
	                return func.apply(self, arguments);
	            };
	        }
		},
		Factory: {
			Models: {},
			Views: {},
			Collections: {},
			Defaults: {}
		},
		bikes: []
	});


	_tc.Factory.Views.baseView = Backbone.View.extend({
		proxy: _tc.Utils.proxy,
		options: {},
		initialize: function (options) {
			this.options = $.extend(true, this.options, options);
			this.getTemplateString();
		},
		getTemplateString: function () {
			if (!this.options.templateUrl) {
				console.log("You must define View.options.templateUrl on the View.");
				return;
			}
			$.get(url).done(this.proxy(this.setTemplate)).fail(this.proxy(function () {
				throw "Template String Not Found. View Instance: " + this;
			}));
		},
		setTemplate: function (data) {
			this.template = Handlebars.compile(data);
			return this;
		}
	});

	_tc.Factory.Models.baseModel = Backbone.Model.extend({
		constants: {
			feetPerMile: 5280,
			newtonsPerPound: 4.44822162,
			millimetersPerInch: 25.4
	    },
        defaults: {
            nosBHP: 0,
            nosDuration: 3.0,            
            tirePressure: 100
        },
        proxy: _tc.Utils.proxy,
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

	_tc.Factory.Collections.baseCollection = Backbone.Collection.extend({
		model: _tc.Factory.Models.baseModel
	});


})(jQuery, window);