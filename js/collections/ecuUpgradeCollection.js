(function($, win) {
	_tc.Factory.Collections.EcuUpgradeCollection = Backbone.Collection.extend({
		model: _tc.Factory.Upgrades.Ecu
	});
})(jQuery, window);