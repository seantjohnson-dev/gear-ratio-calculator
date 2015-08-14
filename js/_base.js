;(function ($, win) {
	win.TuningCalculator = win._tc = {
		bikeProps: {

		},
		base: {
			Model: Backbone.Model.extend({
		        proxy: proxy,
		        constructor: function () {
		            this.sprocketDrive = getSprocketDrive.apply(this, arguments);
		        },
		        defaults: {
		            nosBHP: 0,
		            nosDuration: 3.0,            
		            tirePressure: 100
		        }
		    }),
		    FormView: Backbone.View.extend({

		    }),
		    ResultView: Backbone.View.extend({

		    }),
		    Collection: Backbone.Collection.extend({

		    })
		}
	};
})(jQuery, window);