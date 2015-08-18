;(function ($, win) {
	_tc.Factory.Views.bikeView = _tc.Factory.Views.baseView.extend({
		options: {
			disabledInputClass: "disabled",
			templateUrl: "/templates/bike.hbs"
		},
		inputs: [
			{
				label: "Tire Circumference (In Inches)",
				type: "number",
				selector: ".tireCirc",
				modelField: "tireCirc"
			},
			{
				label: "Primary Drive Ratio",
				type: "number",
				selector: ".primary",
				modelField: "primary"
			},
			{
				label: "Max RPM",
				type: "number",
				selector: ".maxRPM",
				modelField: "maxRPM"
			},
			{
				label: "Wheel Base (In Millimeters)",
				type: "number",
				selector: ".wheelBase",
				modelField: "wheelBase"
			},
			{
				label: "Break Horsepower (BHP)",
				type: "number",
				selector: ".bhp",
				modelField: "bhp"
			},
			{
				label: "Bike Weight (In Pounds)",
				type: "number",
				selector: ".weight",
				modelField: "weight"
			},
			{
				label: "Tire Grip (In Newtons)",
				type: "number",
				selector: ".grip",
				modelField: "grip"
			},
			{
				label: "Tire Pressure (In Percent)",
				type: "range",
				selector: ".tirePressure",
				modelField: "tirePressure"
			},
			{
				label: "Swingarm Installed",
				type: "select",
				selector: ".swingArm",
				parseFloat: true
			},
			{
				label: "NOS Break Horsepower (NBHP)",
				type: "number",
				selector: ".nosBHP",
				modelField: "nosBHP"
			},
			{
				label: "NOS Duration (In Seconds)",
				type: "number",
				selector: ".nosDuration",
				modelField: "nosDuration"
			},
			{
				label: "Front Sprocket Teeth",
				type: "number",
				selector: ".frontSprocket",
				modelField: "frontSprocket"
			},
			{
				label: "Rear Sprocket Teeth",
				type: "number",
				selector: ".rearSprocket",
				modelField: "rearSprocket"
			},
			{
				label: "Gear 1 Drive Ratio",
				type: "number",
				selector: ".gear1Ratio",
				modelField: "gear1Ratio"
			},
			{
				label: "Gear 2 Drive Ratio",
				type: "number",
				selector: ".gear2Ratio",
				modelField: "gear2Ratio"
			},
			{
				label: "Gear 3 Drive Ratio",
				type: "number",
				selector: ".gear3Ratio",
				modelField: "gear3Ratio"
			},
			{
				label: "Gear 4 Drive Ratio",
				type: "number",
				selector: ".gear4Ratio",
				modelField: "gear4Ratio"
			},
			{
				label: "Gear 5 Drive Ratio",
				type: "number",
				selector: ".gear5Ratio",
				modelField: "gear5Ratio"
			},
			{
				label: "Gear 6 Drive Ratio",
				type: "number",
				selector: ".gear6Ratio",
				modelField: "gear6Ratio"
			}
		],
		events: function () {
			var evts = {};
			evts["change input"] = "onFieldChange";
			evts["change select"] = "onFieldChange";
			return _.extend(_tc.Factory.Models.baseModel.prototype.events.apply(this, arguments), evts);
		},
		onFieldChange: function (e) {
			var $input = $(e.currentTarget);
			this.inputs.forEach(this.proxy(function (input) {
				if ($input.is(input.selector)) {
					if (!input.$el) {
						input.$el = $input;
						var val;
						switch(input.type) {
			                case "number":
			                val = parseFloat($input.val());
			                break;
			                case "checkbox":
                			case "radio":
                			if ($input.prop("checked")) {
                				val = parseFloat($input.val());
                			} else {
                				val = undefined;
                			}
                			break;
                			case "select":
                			val = $input.find("option:selected").val();
            				if (input.parseFloat) {
            					val = parseFloat(val);
            				}
                			break;
						}
					}
				}
			}));
			_tc.trigger(_tc.EventNames.FieldChanged, $input);
		},
		toggleInputDisabledState: function (e) {
			e.preventDefault();
			var $this = $(e.currentTarget),
			$input = $(e.currentTarget).siblings('input');
			if ($this.hasClass(this.options.disabledInputClass)) {
	            $input.prop('disabled', false).prop('readonly', false);
	            $this.attr("title", "Disable Gear");
	        } else {
	            $input.prop('disabled', true).prop('readonly', true);
	            $this.attr("title", "Enable Gear");
	        }
	        $this.toggleClass(this.options.disabledInputClass);
		},
		updateModelFromField: function ($field) {

		},
		updateFieldFromModel: function () {

		},
		updateAllFieldsFromModel: function () {

		},
		updateModelFromAllFields: function () {

		}
	});
})(jQuery, window);