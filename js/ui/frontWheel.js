(function ($, win) {
	_tc.Factory.UI.FrontWheel = Backbone.View.extend({
		defaults: {
			src: "/img/default.jpg",
			width: 313,
			height: 168
		},
		initialize: function (options) {
			this.options = $.extend(true, {}, this.defaults, options);
		}
	});
})(jQuery, window);