(function ($, win) {
	_tc.Factory.Components.BaseComponent = Backbone.Model.extend({
		defaults: {
			value: 0,
			unit: ""
		}
	});
})(jQuery, window);