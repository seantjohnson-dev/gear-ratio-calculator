(function ($, win) {
	_tc.Factory.Views.BaseView = Backbone.View.extend({
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
})(jQuery, window);