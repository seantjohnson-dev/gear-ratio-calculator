$(function () {

    var tireSpecs = {
        street: 0.15,
        dual: 0.2,
        dot: 0.28,
        nonDot: 0.35,
        nonDotSlicks: 0.4
    },
    swingarms = {
        level1: 0.03,
        level2: 0.05,
        level3: 0.06,
        level4: 0.07
    },
    bikes = {
        // Collectable Bikes
        hdxl1200: {
            prettyName: "HD-XL1200",
            primary: 2.095,
            tireCirc: 79.95,
            maxRPM: 6000,
            wheelBase: 1524,
            bhp: 75.5,
            weight: 531,
            grip: 1255,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        v92sc: {
            prettyName: "V92SC",
            primary: 2.095,
            tireCirc: 75.67,
            maxRPM: 6000,
            wheelBase: 1615,
            bhp: 74,
            weight: 637,
            grip: 1560,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        // Real Bikes
        ninja650: {
            prettyName: "Ninja 650",
            primary: 2.095,
            tireCirc: 77.15,
            maxRPM: 12000,
            wheelbase: 1410,
            bhp: 64,
            weight: 392,
            grip: 922,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        shiverGT: {
            prettyName: "Shiver GT",
            primary: 1.75,
            tireCirc: 77.9,
            maxRPM: 12000,
            wheelbase: 1440,
            bhp: 96,
            weight: 416,
            grip: 968,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        thundercat: {
            prettyName: "Thundercat",
            primary: 1.708,
            tireCirc: 77.15,
            maxRPM: 15000,
            wheelbase: 1415,
            bhp: 97,
            weight: 416,
            grip: 959,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        mille: {
            prettyName: "Mille",
            primary: 1.9354,
            tireCirc: 76.91,
            maxRPM: 12000,
            wheelbase: 1418,
            bhp: 139.5,
            weight: 416,
            grip: 956,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        boxer: {
            prettyName: "Boxer",
            primary: 1.737,
            tireCirc: 71.96,
            maxRPM: 9500,
            wheelbase: 1485,
            bhp: 130.5,
            weight: 392,
            grip: 1018,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        k1200s: {
            prettyName: "K1200S",
            primary: 1.559,
            tireCirc: 76.91,
            maxRPM: 11000,
            wheelbase: 1570,
            bhp: 164,
            weight: 498,
            grip: 1080,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        superBlackbird: {
            prettyName: "Super Blackbird",
            primary: 1.571,
            tireCirc: 77.9,
            maxRPM: 11000,
            wheelbase: 1490,
            bhp: 150,
            weight: 500,
            grip: 1233,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        b1125: {
            prettyName: "B-1125",
            primary: 1.8055,
            tireCirc: 77.9,
            maxRPM: 10500,
            wheelbase: 1384,
            bhp: 146,
            weight: 374,
            grip: 1008,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        tripleNine: {
            prettyName: "Triple Nine",
            primary: 1.84,
            tireCirc: 76.91,
            maxRPM: 11000,
            wheelbase: 1420,
            bhp: 147,
            weight: 399,
            grip: 1262,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        slingshot: {
            prettyName: "Slingshot",
            primary: 1.974,
            tireCirc: 77.9,
            maxRPM: 15000,
            wheelbase: 1400,
            bhp: 146,
            weight: 368,
            grip: 1156,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        superSlingshot: {
            prettyName: "Super Slingshot",
            primary: 1.617,
            tireCirc: 76.91,
            maxRPM: 13500,
            wheelbase: 1415,
            bhp: 183,
            weight: 396,
            grip: 1068,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        ninja1000r: {
            prettyName: "Ninja 1000R",
            primary: 1.681,
            tireCirc: 79.26,
            maxRPM: 14000,
            wheelbase: 1389,
            bhp: 197,
            weight: 394,
            grip: 1170,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        ninja1400: {
            prettyName: "Ninja 1400",
            primary: 1.556,
            tireCirc: 76.91,
            maxRPM: 11000,
            wheelbase: 1461,
            bhp: 187,
            weight: 473,
            grip: 1364,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        f41000r: {
            prettyName: "F4 1000R",
            primary:  1.7083,
            tireCirc: 79.26,
            maxRPM: 13500,
            wheelbase: 1430,
            bhp: 182,
            weight: 423,
            grip: 1225,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        castiglioni: {
            prettyName: "Castiglioni",
            primary: 1.58,
            tireCirc: 79.26,
            maxRPM: 13500,
            wheelbase: 1430,
            bhp: 197,
            weight: 412,
            grip: 1241,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        busa: {
            prettyName: "Busa",
            primary: 1.596,
            tireCirc: 76.91,
            maxRPM: 12500,
            wheelbase: 1480,
            bhp: 195,
            weight: 485,
            grip: 1305,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        },
        yzf1000: {
            prettyName: "YZF 1000",
            primary: 1.512,
            tireCirc: 79.26,
            maxRPM: 14000,
            wheelbase: 1415,
            bhp: 178,
            weight: 390,
            grip: 1161,
            nosBHP: 0,
            nosDiration: 3,
            tirePressure: 100
        }
    }
    var constants = {
      feetPerMile: 5280,
      newtonsPerPound: 4.44822162
    },
    factors = {},
    elems = {
        $bikeName: $("#bike-select"),
        $bhp: $("#bhp"),
        $weight: $("#weight"),
        $grip: $("#grip"),

        $nosBHP: $("#nos-bhp"),
        $nosDuration: $("#nos-duration"),

        $maxRPM: $("#max-rpm"),
        $frontSprocket: $("#front-sprocket"),
        $rearSprocket: $("#rear-sprocket"),
        $gear1Ratio: $("#gear-1-ratio"),
        $gear2Ratio: $("#gear-2-ratio"),
        $gear3Ratio: $("#gear-3-ratio"),
        $gear4Ratio: $("#gear-4-ratio"),
        $gear5Ratio: $("#gear-5-ratio"),
        $gear6Ratio: $("#gear-6-ratio"),
        
        $tireCirc: $("#tire-circ"),
        
        $primary: $("#primary")
    };

    function getSetInitialValues() {
        factors.bikeName = elems.$bikeName.find("option:selected").val();

        elems.$tireCirc.val(factors.tireCirc = parseFloat(bikes[factors.bikeName].tireCirc / 12));
        elems.$maxRPM.val(factors.maxRPM = parseInt(bikes[factors.bikeName].maxRPM));
        elems.$primary.val(factors.primary = parseFloat(bikes[factors.bikeName].primary));

        elems.$bhp.val(factors.bhp = parseInt(bikes[factors.bikeName].bhp));
        elems.$weight.val(factors.bikeWeight = parseInt(bikes[factors.bikeName].weight));
        elems.$grip.val(factors.grip = parseInt(bikes[factors.bikeName].grip));

        factors.nosBHP = parseInt(elems.$nosBHP.val());
        factors.nosDuration = parseFloat(elems.$nosDuration.val()) / 1000;

        factors.frontSprocket = parseInt(elems.$frontSprocket.val());
        factors.rearSprocket  = parseInt(elems.$rearSprocket.val());
        factors.finalDrive = factors.rearSprocket / factors.frontSprocket;

        factors.gear1Ratio = parseFloat(elems.$gear1Ratio.val());
        factors.gear2Ratio = parseFloat(elems.$gear2Ratio.val());
        factors.gear3Ratio = parseFloat(elems.$gear3Ratio.val()),
        factors.gear4Ratio = parseFloat(elems.$gear4Ratio.val());
        factors.gear5Ratio = parseFloat(elems.$gear5Ratio.val());
        factors.gear6Ratio = parseFloat(elems.$gear6Ratio.val());

        factors.gear1Overall = getOverallDrive(1);
        factors.gear2Overall = getOverallDrive(2);
        factors.gear3Overall = getOverallDrive(3);
        factors.gear4Overall = getOverallDrive(4);
        factors.gear5Overall = getOverallDrive(5);
        factors.gear6Overall = getOverallDrive(6);

    }

    function getOverallDrive(gear) {
        return bikes[factors.bikeName].primary * factors['gear' + gear + 'Ratio'] * factors.finalDrive;
    }

    function bikeChange(e) {
        var val = $(e.currentTarget).find("option:selected").val();;
        if (val && val !== "") {
            getSetInitialValues();
        }
    }

    $("#bike-select").change(bikeChange);

    // $("#bike-calc").submit(function (e) {
    //     e.preventDefault();
    //     getSetValues();
    // });
});