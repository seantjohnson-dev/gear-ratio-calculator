(function ($, win) {
	_tc.Factory.Components.Nitrous = Backbone.View.extend({
        defaults: {
            name: "Nitrous",
            value: 0,
            duration: {
                value: 3.0,
                unit: "s"
            }
        },
        initialize: function (options) {
            this.options = $.extend(true, {}, this.defaults, options);
        }
    });
})(jQuery, window);