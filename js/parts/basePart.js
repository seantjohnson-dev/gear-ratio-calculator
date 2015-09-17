(function ($, win) {
	_tc.Factory.Parts.BasePart = Backbone.Model.extend({
		defaults: {
			value: 0,
			unit: ""
		}
	});
})(jQuery, window);