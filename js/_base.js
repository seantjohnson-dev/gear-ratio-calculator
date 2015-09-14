;(function ($, win) {
	win.TuneCalc = win._tc = $.extend(true, {}, Backbone.Events, {
		EventNames: {
			FieldChanged: "FieldChanged",
			TemplateReceived: "TemplateReceived",
			ModelReCalc: "ModelReCalc"
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
      Components: {
      	Ecu: {},
      	Engine: {},
      	Exhaust: {},
      	Nitro: {},
      	Turbo: {},
      	Weight: {},
      	Wheels: {},
      	Gearbox: {}
      },
			Models: {},
			Views: {},
			Collections: {},
			Defaults: {}
		},
		bikes: []
	});

})(jQuery, window);