(function ($, win) {
    var choices = [
        {
            name: "Stock SwingArm",
            upgrade: 0,
            value: 0.00
        },
        {
            name: "SwingArm Level 1",
            upgrade: 1,
            value: 0.03
        },
        {
            name: "SwingArm Level 2",
            upgrade: 2,
            value: 0.05
        },
        {
            name: "SwingArm Level 3",
            upgrade: 3,
            value: 0.06
        },
        {
            name: "SwingArm Level 4",
            upgrade: 4,
            value: 0.07
        }
    ];
    _tc.Factory.Parts.SwingArm = Backbone.View.extend({
        defaults: {
            value: 0.00,
            unit: "%"
        },
        initialize: function (options) {
            this.options = $.extend(true, {}, this.defaults, options);
        },
        getChoices: function () {
            return choices;
        }
    });
})(jQuery, window);