;(function ($, win) {
	_tc.Factory.Views.bikeView = _tc.Factory.Views.baseView.extend({
		className: "bikeView",
		tagName: "div",
		options: {
			disabledInputClass: "disabled",
			disableInputButtonSelector: ".disableInputButton",
			fieldWrapperSelector: ".fieldWrapper"
		},
		inputs: [
			{
				type: "number",
				selector: ".tireWidth",
				modelField: "tireWidth"
			},
			{
				type: "number",
				selector: ".aspectRatio",
				modelField: "aspectRatio"
			},
			{
				type: "number",
				selector: ".rimSize",
				modelField: "rimSize"
			},
			{
				type: "number",
				selector: ".tireCirc",
				modelField: "tireCirc"
			},
			{
				type: "number",
				selector: ".primaryDrive",
				modelField: "primaryDrive"
			},
			{
				type: "number",
				selector: ".maxPowerRPM",
				modelField: "maxPowerRPM"
			},
			{
				type: "number",
				selector: ".maxTorqueRPM",
				modelField: "maxTorqueRPM"
			},
			{
				type: "number",
				selector: ".maxTorque",
				modelField: "maxTorque"
			},
			{
				type: "number",
				selector: ".redlineRPM",
				modelField: "redlineRPM"
			},
			{
				type: "number",
				selector: ".wheelBase",
				modelField: "wheelBase"
			},
			{
				type: "number",
				selector: ".bhp",
				modelField: "bhp"
			},
			{
				type: "number",
				selector: ".weight",
				modelField: "weight"
			},
			{
				type: "number",
				selector: ".grip",
				modelField: "grip"
			},
			{
				type: "number",
				selector: ".tirePressure",
				modelField: "tirePressure"
			},
			{
				type: "select",
				selector: ".swingArm",
				parseFloat: true,
				modelField: "swingArm"
			},
			{
				type: "number",
				selector: ".nosBHP",
				modelField: "nosBHP"
			},
			{
				type: "number",
				selector: ".nosDuration",
				modelField: "nosDuration"
			},
			{
				type: "number",
				selector: ".frontSprocket",
				modelField: "frontSprocket"
			},
			{
				type: "number",
				selector: ".rearSprocket",
				modelField: "rearSprocket"
			},
			{
				type: "number",
				selector: ".gear1Ratio",
				modelField: "gear1Ratio"
			},
			{
				type: "number",
				selector: ".gear2Ratio",
				modelField: "gear2Ratio"
			},
			{
				type: "number",
				selector: ".gear3Ratio",
				modelField: "gear3Ratio"
			},
			{
				type: "number",
				selector: ".gear4Ratio",
				modelField: "gear4Ratio"
			},
			{
				type: "number",
				selector: ".gear5Ratio",
				modelField: "gear5Ratio"
			},
			{
				type: "number",
				selector: ".gear6Ratio",
				modelField: "gear6Ratio"
			}
		],
		template: Handlebars.compile(_tc.Templates.bikeView),
		events: function () {
			var evts = {};
			evts["change input"] = "onFieldChange";
			evts["change select"] = "onFieldChange";
			evts["click " + this.options.disableInputButtonSelector] = "toggleInputDisabledState";
			return _.extend(_tc.Factory.Views.baseView.prototype.events.apply(this, arguments), evts);
		},
		initialize: function (options) {
			_tc.Factory.Views.baseView.prototype.initialize.apply(this, arguments);
			_tc.trigger(_tc.EventNames.ModelReCalc, this.model);
		},
		onFieldChange: function (e) {
			var $input = $(e.currentTarget);
			this.inputs.forEach(this.proxy(function (input) {
				if ($input.is(input.selector)) {
					var val;
					if (!input.$el) {
						input.$el = $input;
					}
					switch(input.type) {
		                case "number":
		                	val = parseFloat($input.val());
		                break;
            			case "select":
	            			val = $input.find("option:selected").val();
	        				if (input.parseFloat) {
	        					val = parseFloat(val);
	        				}
            			break;
					}
					this.model.set(input.modelField, val);
					_tc.trigger(_tc.EventNames.ModelReCalc, this.model);
					this.render();
				}
			}));
		},
		toggleInputDisabledState: function (e) {
			e.preventDefault();
			var $this = $(e.currentTarget),
			$input = $(e.currentTarget).siblings('input');
			if ($this.parents(this.options.fieldWrapperSelector).hasClass(this.options.disabledInputClass)) {
	            $input.prop('disabled', false).prop('readonly', false);
	            $this.attr("title", "Disable Gear");
	        } else {
	            $input.prop('disabled', true).prop('readonly', true);
	            $this.attr("title", "Enable Gear");
	        }
	        $this.parents(this.options.fieldWrapperSelector).toggleClass(this.options.disabledInputClass);
		}
	});
})(jQuery, window);