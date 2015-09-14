(function ($, win) {
	_tc.Factory.Components.Image = function (options) {
		var obj = {
			src: "/img/default.jpg",
			width: 500,
			height: 250
		};
		return $.extend(true, {}, obj, options);
	}
})(jQuery, window);