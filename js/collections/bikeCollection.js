(function($, win) {
	_tc.Factory.Collections.BikeCollection = Backbone.Collection.extend({
		model: _tc.Factory.Models.BaseBike
	});
})(jQuery, window);