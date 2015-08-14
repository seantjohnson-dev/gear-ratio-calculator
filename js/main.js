$(function () {

    // UTILITY FUNCTIONS AND VARIABLES


    var _ = {},
    isFuncs = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'];

    isFuncs.forEach(function (name) {
        _['is' + name] = function(obj) {
          return Object.prototype.toString.call(obj) === '[object ' + name + ']';
        };
    });

    _.isNaN = function (obj) {
        return _.isNumber(obj) && obj !== +obj;
    }

    $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };


    // END OF UTILITY FUNCTIONS AND VARIABLES

    var bikes = {
        // Collectable Bikes
        hdxl1200: {
            primary: 2.095,
            tireCirc: 79.95,
            maxRPM: 6000,
            wheelBase: 1524,
            bhp: 75.5,
            weight: 531,
            grip: 1255,
            nosBHP: 0,
            frontSprocket: 18,
            rearSprocket: 38,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.688,
            gear2Ratio: 1.845,
            gear3Ratio: 1.433,
            gear4Ratio: 1.181,
            gear5Ratio: 1.0,
            gear6Ratio: 0.4
        },
        v92sc: {
            primary: 2.095,
            tireCirc: 75.67,
            maxRPM: 6000,
            wheelBase: 1416,
            bhp: 74,
            weight: 637,
            grip: 1560,
            nosBHP: 0,
            frontSprocket: 18,
            rearSprocket: 39,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.033,
            gear2Ratio: 1.183,
            gear3Ratio: 0.903,
            gear4Ratio: 0.739,
            gear5Ratio: 0.619,
            gear6Ratio: 0.4
        },
        trophy1949: {
            primary: 2.784,
            tireCirc: 84.823,
            maxRPM: 7000,
            wheelBase: 1615,
            bhp: 36,
            weight: 293,
            grip: 578,
            nosBHP: 0,
            frontSprocket: 18,
            rearSprocket: 46,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 3.07,
            gear2Ratio: 2.3,
            gear3Ratio: 1.45,
            gear4Ratio: 1.0,
            gear5Ratio: 0.4,
            gear6Ratio: 0.4
        },
        // Real Bikes
        ninja650: {
            primary: 2.095,
            tireCirc: 77.15,
            maxRPM: 12000,
            wheelBase: 1410,
            bhp: 64,
            weight: 392,
            grip: 922,
            nosBHP: 0,
            frontSprocket: 15,
            rearSprocket: 46,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.438,
            gear2Ratio: 1.714,
            gear3Ratio: 1.333,
            gear4Ratio: 1.111,
            gear5Ratio: 0.966,
            gear6Ratio: 0.852
        },
        shiverGT: {
            primary: 1.75,
            tireCirc: 77.9,
            maxRPM: 12000,
            wheelBase: 1440,
            bhp: 96,
            weight: 416,
            grip: 968,
            nosBHP: 0,
            frontSprocket: 16,
            rearSprocket: 44,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.57,
            gear2Ratio: 1.88,
            gear3Ratio: 1.5,
            gear4Ratio: 1.27,
            gear5Ratio: 1.13,
            gear6Ratio: 1.04
        },
        thundercat: {
            primary: 1.708,
            tireCirc: 77.15,
            maxRPM: 15000,
            wheelBase: 1415,
            bhp: 97,
            weight: 416,
            grip: 959,
            nosBHP: 0,
            frontSprocket: 15,
            rearSprocket: 47,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.846,
            gear2Ratio: 1.947,
            gear3Ratio: 1.545,
            gear4Ratio: 1.333,
            gear5Ratio: 1.19,
            gear6Ratio: 1.074
        },
        mille: {
            primary: 1.9354,
            tireCirc: 76.91,
            maxRPM: 12000,
            wheelBase: 1418,
            bhp: 139.5,
            weight: 416,
            grip: 956,
            nosBHP: 0,
            frontSprocket: 16,
            rearSprocket: 40,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.27,
            gear2Ratio: 1.63,
            gear3Ratio: 1.3,
            gear4Ratio: 1.091,
            gear5Ratio: 0.96,
            gear6Ratio: 0.88
        },
        boxer: {
            primary: 1.737,
            tireCirc: 71.96,
            maxRPM: 9500,
            wheelBase: 1485,
            bhp: 130.5,
            weight: 392,
            grip: 1018,
            nosBHP: 0,
            frontSprocket: 16,
            rearSprocket: 44,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.176,
            gear2Ratio: 1.625,
            gear3Ratio: 1.29,
            gear4Ratio: 1.06,
            gear5Ratio: 0.93,
            gear6Ratio: 0.84
        },
        k1200s: {
            primary: 1.559,
            tireCirc: 76.91,
            maxRPM: 11000,
            wheelBase: 1570,
            bhp: 164,
            weight: 498,
            grip: 1080,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 48,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.52,
            gear2Ratio: 1.84,
            gear3Ratio: 1.45,
            gear4Ratio: 1.28,
            gear5Ratio: 1.14,
            gear6Ratio: 1.01
        },
        superBlackbird: {
            primary: 1.571,
            tireCirc: 77.9,
            maxRPM: 11000,
            wheelBase: 1490,
            bhp: 150,
            weight: 500,
            grip: 1233,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 44,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.769,
            gear2Ratio: 2.0,
            gear3Ratio: 1.579,
            gear4Ratio: 1.333,
            gear5Ratio: 1.167,
            gear6Ratio: 1.042
        },
        b1125: {
            primary: 1.8055,
            tireCirc: 77.9,
            maxRPM: 10500,
            wheelBase: 1384,
            bhp: 146,
            weight: 374,
            grip: 1008,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 44,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.462,
            gear2Ratio: 1.75,
            gear3Ratio: 1.381,
            gear4Ratio: 1.174,
            gear5Ratio: 1.042,
            gear6Ratio: 0.96
        },
        tripleNine: {
            primary: 1.84,
            tireCirc: 76.91,
            maxRPM: 11000,
            wheelBase: 1420,
            bhp: 147,
            weight: 399,
            grip: 1262,
            nosBHP: 0,
            frontSprocket: 15,
            rearSprocket: 36,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.466,
            gear2Ratio: 1.765,
            gear3Ratio: 1.4,
            gear4Ratio: 1.182,
            gear5Ratio: 1.043,
            gear6Ratio: 0.958
        },
        slingshot: {
            primary: 1.974,
            tireCirc: 77.9,
            maxRPM: 15000,
            wheelBase: 1400,
            bhp: 146,
            weight: 368,
            grip: 1156,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 45,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.785,
            gear2Ratio: 2.052,
            gear3Ratio: 1.714,
            gear4Ratio: 1.5,
            gear5Ratio: 1.347,
            gear6Ratio: 1.208
        },
        superSlingshot: {
            primary: 1.617,
            tireCirc: 76.91,
            maxRPM: 13500,
            wheelBase: 1415,
            bhp: 183,
            weight: 396,
            grip: 1068,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 42,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.562,
            gear2Ratio: 2.025,
            gear3Ratio: 1.714,
            gear4Ratio: 1.5,
            gear5Ratio: 1.36,
            gear6Ratio: 1.269
        },
        ninja1000r: {
            primary: 1.681,
            tireCirc: 79.26,
            maxRPM: 14000,
            wheelBase: 1389,
            bhp: 197,
            weight: 394,
            grip: 1170,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 39,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.6,
            gear2Ratio: 2.053,
            gear3Ratio: 1.737,
            gear4Ratio: 1.571,
            gear5Ratio: 1.444,
            gear6Ratio: 1.348
        },
        ninja1400: {
            primary: 1.556,
            tireCirc: 76.91,
            maxRPM: 11000,
            wheelBase: 1461,
            bhp: 187,
            weight: 473,
            grip: 1364,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 41,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.625,
            gear2Ratio: 1.947,
            gear3Ratio: 1.545,
            gear4Ratio: 1.333,
            gear5Ratio: 1.154,
            gear6Ratio: 1.036
        },
        f41000r: {
            primary:  1.7083,
            tireCirc: 79.26,
            maxRPM: 13500,
            wheelBase: 1430,
            bhp: 182,
            weight: 423,
            grip: 1225,
            nosBHP: 0,
            frontSprocket: 15,
            rearSprocket: 41,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.92,
            gear2Ratio: 2.13,
            gear3Ratio: 1.78,
            gear4Ratio: 1.5,
            gear5Ratio: 1.32,
            gear6Ratio: 1.21
        },
        castiglioni: {
            primary: 1.58,
            tireCirc: 79.26,
            maxRPM: 13500,
            wheelBase: 1430,
            bhp: 197,
            weight: 412,
            grip: 1241,
            nosBHP: 0,
            frontSprocket: 15,
            rearSprocket: 39,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.92,
            gear2Ratio: 2.13,
            gear3Ratio: 1.78,
            gear4Ratio: 1.5,
            gear5Ratio: 1.32,
            gear6Ratio: 1.19
        },
        busa: {
            primary: 1.596,
            tireCirc: 76.91,
            maxRPM: 12500,
            wheelBase: 1480,
            bhp: 195,
            weight: 485,
            grip: 1305,
            nosBHP: 0,
            frontSprocket: 19,
            rearSprocket: 43,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.615,
            gear2Ratio: 1.937,
            gear3Ratio: 1.526,
            gear4Ratio: 1.285,
            gear5Ratio: 1.136,
            gear6Ratio: 1.043
        },
        yzf1000: {
            primary: 1.512,
            tireCirc: 79.26,
            maxRPM: 14000,
            wheelBase: 1415,
            bhp: 178,
            weight: 390,
            grip: 1161,
            nosBHP: 0,
            frontSprocket: 17,
            rearSprocket: 47,
            nosDuration: 3.0,
            tirePressure: 100,
            gear1Ratio: 2.533,
            gear2Ratio: 2.063,
            gear3Ratio: 1.762,
            gear4Ratio: 1.522,
            gear5Ratio: 1.364,
            gear6Ratio: 1.269
        }
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

    function getOverallDrive(gear) {
        return bikes[activeValues.bikeName].primary * activeValues['gear' + gear + 'Ratio'] * activeValues.finalDrive;
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

    function getGripConstant(stockGrip, weight) {
        return ((stockGrip / constants.newtonsPerPound) / weight);
    }

    function getGrip(gripConstant, weight, pressure) {
        return (gripConstant * weight / pressure);
    }

    $("#bikeCalc").submit(function (e) {
        e.preventDefault();
        getValues();
        validateValues();
    });
});