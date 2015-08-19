;(function ($, win) {
	win.TuneCalc = win._tc = $.extend(true, {}, Backbone.Events, {
		EventNames: {
			FieldChanged: "FieldChanged",
			TemplateReceived: "TemplateReceived",
			ModelRecalculated: "ModelRecalculated"
		},
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
		model: {},
		events: function () {
			var evts = {};
			return evts;
		},
		initialize: function (options) {
			this.options = $.extend(true, this.options, options);
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	_tc.Factory.Models.baseModel = Backbone.Model.extend({
		constants: {
			feetPerMile: 5280,
			newtonsPerPound: 4.44822162,
			millimetersPerInch: 25.4
	    },
        proxy: _tc.Utils.proxy,
        initialize: function (attrs, options) {
        	this.options = $.extend(true, this.options, options);
        	_tc.on(_tc.EventNames.FieldChanged, this.proxy(this.reCalc));
        },
        reCalc: function () {
        	this.calcGrip().calcWheelBase();
        	_tc.trigger(_tc.EventNames.ModelRecalculated, this);
        	return this;
        },
        calcGrip: function () {
        	this.set("grip", Math.round((this.attributes.defaults.grip / (this.attributes.defaults.weight * this.constants.newtonsPerPound)) * (this.get("weight") * this.constants.newtonsPerPound) / (this.get("tirePressure") / 100)));
        	return this;
        },
        calcWheelBase: function () {
        	this.set("wheelBase", this.attributes.defaults.wheelBase + (this.get("wheelBase") * this.get("swingArm")));
        	return this;
        },
        getTotalGearDrive: function (gear) {
        	if (_.isString(gear) || _.isNumber(parseInt(gear))) {
            	gear = parseInt(gear);
        	}
	        if (gear < 1 || gear > 6) {
	            throw "Invalid Gear Value Supplied to _getTotalGearDrive. The gear value passed needs to be 1-6 as a string or an integer.";
	        }
	        return (this.get("primary") * this._getSprocketDrive() * this.get("gear" + gear + "Ratio"));
        },
        getSprocketDrive: function () {
        	return (this.get("rearSprocket") / this.get("frontSprocket"));
        }
    });

	_tc.Factory.Collections.baseCollection = Backbone.Collection.extend({
		model: _tc.Factory.Models.baseModel
	});


})(jQuery, window);