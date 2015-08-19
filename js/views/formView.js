;(function ($, win) {
	_tc.Factory.Views.formView = _tc.Factory.Views.baseView.extend({
		options: {
			templateUrl: "/templates/form.hbs",
			dependentSelector: ".bikeDependent",
			bikeSelector: ".bikeName",
			bikeViewWrapperSelector: ".bikeViewWrapper",
			localStorageVarName: "customModels"
		},
		model: new Backbone.Model({bikeOptions: []}),
		template: Handlebars.compile(_tc.Templates.formView),
		childViews: {},
		events: function () {
			var evts = {};
			evts["change " + this.options.bikeSelector] = "onBikeChange";
			return _.extend(_tc.Factory.Views.baseView.prototype.events.apply(this, arguments), evts);
		},
		initialize: function (options) {
			_tc.Factory.Views.baseView.prototype.initialize.apply(this, arguments);
			var models = this.getCustomModels();
			if (models) {
				this.collection = new _tc.Factory.Collections.baseCollection(models);
			} else {
				this.collection = new _tc.Factory.Collections.baseCollection(_tc.bikes);
			}
			_tc.on(_tc.EventNames.FieldChanged, this.proxy(function (obj) {
				this.saveCustomModels();
			}));
			this.populateBikeOptions().render();
		},
		createBikeOption: function (name, selected) {
			var $option;
			if (!name) {
				$option = $("<option/>").text("Select a Bike");
			} else {
				$option = $("<option/>").val(name).text(name);
			}
			if (selected) {
				$option.prop("selected", true).attr("selected", "selected");
			}
			this.model.attributes.bikeOptions.push({text: $option.wrap("<div/>").parent().html()});
			return this;
		},
		populateBikeOptions: function () {
			this.model.attributes.bikeOptions = [];
			this.createBikeOption("", true);
			this.collection.each(this.proxy(function (model) {
				this.createBikeOption(model.get('name'));
			}));
			return this;
		},
		onBikeChange: function (e) {
	        var bikeName = $(e.currentTarget).find("option:selected").val();
	        if (bikeName !== "") {
	        	if (!this.childViews[bikeName]) {
	        		var model = this.collection.findWhere({name: bikeName});
	            	this.childViews[bikeName] = new _tc.Factory.Views.bikeView({model: model});
	        	}
	            this.$bikeViewWrapper = this.$(this.options.bikeViewWrapperSelector);
	            this.$bikeViewWrapper.html(this.childViews[bikeName].render().el);
	        }
		},
		getCustomModels: function () {
			var customModels;
			if (Modernizr.localstorage) {
				customModels = JSON.parse(localStorage.getItem(this.options.localStorageVarName));
			} else {
				customModels = JSON.parse(Cookies.get(this.options.localStorageVarName));
			}
			return customModels;
		},
		saveCustomModels: function () {
			if (Modernizr.localstorage) {
				localStorage.setItem(this.options.localStorageVarName, JSON.stringify(this.collection.toJSON()));
			} else {
				Cookies.set(this.options.localStorageVarName, JSON.stringify(this.collection.toJSON()));
			}
			return this;
		}
	});
})(jQuery, window);