$(function () {

    var proxy = function (func) {
        var self = this;
        return function() {
            return func.apply(self, arguments);
        };
    };

    var getSprocketDrive = function () {
        return (this.get("rearSprocket") / this.get("frontSprocket"));
    };
    var getOverallDrive = function (gear) {
        if (_.isString(gear) && _.isNumber(parseInt(gear))) {
            gear = parseInt(gear);
        }
        if (gear < 1 || gear > 6) {
            throw "Invalid Gear Value Supplied to getOverallDrive. The gear value passed needs to be 1-6 as a string or an integer.";
        }
        return (this.get("primary") * getSprocketDrive.apply(this, arguments) * this.get("gear" + gear + "Ratio"));
    };

    var getGripConstant = function () {
        return ((stockGrip / constants.newtonsPerPound) / weight);
    };

    var getGrip = function (gripConstant, weight, pressure) {
        return (gripConstant * weight / pressure);
    };


    $(".disableInputButton").click(function (e) {
        e.preventDefault();
        toggleInputDisabledState($(e.currentTarget), $(e.currentTarget).siblings('input'));
    });

    function toggleInputDisabledState($this, $input) {
        if ($this.hasClass('disabled')) {
            $input.prop('disabled', false);
            $input.prop('readonly', false);
            $this.removeClass('disabled');
            $this.attr("title", "Disable Gear");
        } else {
            $input.prop('disabled', true);
            $input.prop('readonly', true);
            $this.addClass('disabled');
            $this.attr("title", "Enable Gear");
        }
    }

    var hdxl1200 = baseBikeModel.extend();
    var v92sc = baseBikeModel.extend();
    var trophy1949 = baseBikeModel.extend();
    var ninja650 = baseBikeModel.extend();
    var shiverGT = baseBikeModel.extend();
    var thundercat = baseBikeModel.extend();
    var mille = baseBikeModel.extend();
    var boxer = baseBikeModel.extend();
    var k1200s = baseBikeModel.extend();
    var superBlackbird = baseBikeModel.extend();
    var b1125  = baseBikeModel.extend();
    var tripleNine = baseBikeModel.extend();
    var slingshot = baseBikeModel.extend();
    var superSlingshot = baseBikeModel.extend();
    var ninja1000r = baseBikeModel.extend();
    var ninja1400 = baseBikeModel.extend();
    var f41000r = baseBikeModel.extend();
    var castiglioni = baseBikeModel.extend();
    var busa = baseBikeModel.extend();
    var yzf1000 = baseBikeModel.extend();

    var bikes = {
        hdxl1200: new baseBikeModel(),
        v92sc: new baseBikeModel(),
        trophy1949: new baseBikeModel(),
        ninja650: new baseBikeModel(),
        shiverGT: new baseBikeModel(),
        thundercat: new baseBikeModel(),
        mille: new baseBikeModel(),
        boxer: new baseBikeModel(),
        k1200s: new baseBikeModel(),
        superBlackbird: new baseBikeModel(),
        b1125: new baseBikeModel(),
        tripleNine: new baseBikeModel(),
        slingshot: new baseBikeModel(),
        superSlingshot: new baseBikeModel(),
        ninja1000r: new baseBikeModel(),
        ninja1400: new baseBikeModel(),
        f41000r: new baseBikeModel(),
        castiglioni: new baseBikeModel(),
        busa: new busa(),
        yzf1000: new yzf1000()
    }
    var constants = {
      feetPerMile: 5280,
      newtonsPerPound: 4.44822162,
      millimetersPerInch: 25.4
    },
    activeValues = {},
    elems = {
        $bikeName: $("#bikeName"),
        $tireCirc: $("#tireCirc"),
        $primary: $("#primary"),
        $maxRPM: $("#maxRPM"),
        $wheelBase: $("#wheelBase"),

        $bhp: $("#bhp"),
        $weight: $("#weight"),
        $grip: $("#grip"),
        $tirePressure: $("#tirePressure"),
        $swingArm: $("#swingArm"),

        $nosBHP: $("#nosBHP"),
        $nosDuration: $("#nosDuration"),
        
        $frontSprocket: $("#frontSprocket"),
        $rearSprocket: $("#rearSprocket"),
        $gear1Ratio: $("#gear1Ratio"),
        $gear2Ratio: $("#gear2Ratio"),
        $gear3Ratio: $("#gear3Ratio"),
        $gear4Ratio: $("#gear4Ratio"),
        $gear5Ratio: $("#gear5Ratio"),
        $gear6Ratio: $("#gear6Ratio")
        
    };

    function getValues() {
        for (var $i in elems) {
            var tagName = elems[$i][0].tagName.toLowerCase();
            var type = elems[$i].attr("type");
            var $name = "$" + elems[$i].attr("name");
            if (tagName != "input") {
                type = tagName;
            }
            switch(type) {
                case "text":
                case "email":
                case "password":
                case "textarea":
                case "hidden":
                case "url":
                case "number":
                    activeValues[$name] = (_.isNaN(parseFloat(elems[$i].val()))) ? elems[$i].val() : parseFloat(elems[$i].val());
                break;
                case "checkbox":
                case "radio":
                    activeValues[$name] = (elems[$i].prop('checked')) ? ((_.isNaN(parseFloat(elems[$i].val()))) ? elems[$i].val() : parseFloat(elems[$i].val())) : undefined;
                break;
                case "select":
                    activeValues[$name] = (!_.isNumber(parseFloat(elems[$i].find('option:selected').val()))) ? elems[$i].find('option:selected').val() : parseFloat(elems[$i].find('option:selected').val());
                break;
            }
        }
        return activeValues;
    }

    function setValues(bikeName) {
        for (var i in bikes[bikeName]) {
            var $elem = elems["$" + i];
            var tagName = $elem[0].tagName.toLowerCase();
            var type = $elem.attr("type");
            if (tagName != "input") {
                type = tagName;
            }
            switch(type) {
                case "text":
                case "email":
                case "password":
                case "textarea":
                case "hidden":
                case "url":
                case "number":
                case "checkbox":
                case "radio":
                    $elem.val(bikes[bikeName][i]);
                break;
                case "select":
                    $elem.find("option").prop("selected", false);
                    $elem.find("option[value='" + bikes[bikeName][i] + "']").prop("selected", true);
                break;
            }
            activeValues[i] = bikes[bikeName][i];
        }
        console.log(activeValues);
        return activeValues;
    }

    function validateValues() {
        var errors = [];
        for (var v in activeValues) {
            if (activeValues[v] === undefined) {
                errors.push(elems["$" + v].attr("placeholder") + " value is not valid.");
            }
        }
        if (errors.length > 0) {
            var eObj = {
                valid: false,
                errors: errors
            };
            return eObj;
            console.log(eObj);
        }
        return true;
    }

    function onBikeChange(e) {
        var $this = $(e.currentTarget);
        var bikeName = $this.find("option:selected").val();
        if (bikeName !== "") {
            $(".bikeDependent").addClass("showing");
            setValues(bikeName);
        } else {
            $(".bikeDependent").removeClass("showing");
        }
    }

    function onPressureChange(e) {
        activeValues.tirePressure = parseFloat($(e.currentTarget).val());
        // elems.$grip.val(Math.round(activeValues.grip / activeValues.tirePressure));
    }

    function onWeightChange(e) {
        activeValues.weight = parseFloat($(e.currentTarget).val());
    }

    elems.$bikeName.change(onBikeChange);
    elems.$tirePressure.change(onPressureChange);

    $("#bikeCalc").submit(function (e) {
        e.preventDefault();
        getValues();
        validateValues();
    });
});