;(function ($, win) {
	_tc.Factory.Views.BikeFormView = _tc.Factory.Views.BaseView.extend({
		options: {
			dependentSelector: ".bikeDependent",
			bikeSelector: ".bikeName",
			trackSelector: ".trackDistance",
			timeSelector: ".targetTime",
			bikeFormFieldsViewWrapperSelector: ".bikeFormFieldsViewWrapper",
			localStorageVarName: "customModels"
		},
		model: new Backbone.Model({bikeOptions: []}),
		template: Handlebars.compile(_tc.Templates.BikeFormView),
		childViews: {},
		events: function () {
			var evts = {};
			evts["change " + this.options.bikeSelector] = "onFieldChange";
			evts["change " + this.options.trackSelector] = "onFieldChange";
			evts["change " + this.options.timeSelector] = "onFieldChange";
			return _.extend(_tc.Factory.Views.BaseView.prototype.events.apply(this, arguments), evts);
		},
		initialize: function (options) {
			_tc.Factory.Views.BaseView.prototype.initialize.apply(this, arguments);
			var models = this.getCustomModels();
			if (models) {
				this.collection = new _tc.Factory.Collections.BaseBikeCollection(models);
			} else {
				this.collection = new _tc.Factory.Collections.BaseBikeCollection(_tc.bikes);
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
		onFieldChange: function (e) {
	        var bikeName = this.$(this.options.bikeSelector).find("option:selected").val();
	        var displacement = this.$(this.options.trackSelector).find("option:selected").val();
	        var time = this.$(this.options.timeSelector).val();
	        if (bikeName !== "" && displacement !== "" && time > 0) {
	        	if (!this.childViews[bikeName]) {
	        		var model = this.collection.findWhere({name: bikeName});
	            	this.childViews[bikeName] = new _tc.Factory.Views.bikeFormFieldsView({model: model});
	        	}
	            this.$bikeFormFieldsViewWrapper = this.$(this.options.bikeFormFieldsViewWrapperSelector);
	            this.$bikeFormFieldsViewWrapper.html(this.childViews[bikeName].render().el);
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