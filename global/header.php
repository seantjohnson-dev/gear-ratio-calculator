<!doctype html>
<html>
	<head>
		<title>Tuning Calculator</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" rel="stylesheet" type="text/css"></link>
		<link href="css/main.css" rel="stylesheet" type="text/css"></link>
		<link rel="stylesheet" href="css/bike_img.css" />

		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.0.3/js.cookie.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js"></script>

		<script src="js/_base.js"></script>
		<script src="js/upgrades/ecu.js"></script>
		<script src="js/upgrades/engine.js"></script>
		<script src="js/upgrades/exhaust.js"></script>
		<script src="js/upgrades/intake.js"></script>
		<script src="js/upgrades/nitrous.js"></script>
		<script src="js/upgrades/nitro.js"></script>
		<script src="js/upgrades/swingarm.js"></script>
		<script src="js/upgrades/tires.js"></script>
		<script src="js/upgrades/turbo.js"></script>
		<script src="js/upgrades/weight.js"></script>
		<script src="js/upgrades/wheels.js"></script>

		<script src="js/parts/basePart.js"></script>
		<script src="js/parts/engine.js"></script>
		<script src="js/parts/frontSprocket.js"></script>
		<script src="js/parts/gearBox.js"></script>
		<script src="js/parts/nitro.js"></script>
		<script src="js/parts/power.js"></script>
		<script src="js/parts/ratios.js"></script>
		<script src="js/parts/rearSprocket.js"></script>
		<script src="js/parts/swingarm.js"></script>
		<script src="js/parts/tire.js"></script>
		<script src="js/parts/torque.js"></script>
		<script src="js/parts/weight.js"></script>
		<script src="js/parts/wheelBase.js"></script>

		<script src="js/ui/frontDisk.js"></script>
		<script src="js/ui/rearDisk.js"></script>
		<script src="js/ui/frontWheel.js"></script>
		<script src="js/ui/rearWheel.js"></script>
		<script src="js/ui/frame.js"></script>
		<script src="js/ui/paint.js"></script>
		<script src="js/ui/bike.js"></script>

		<script src="js/models/baseBike.js"></script>
		<script src="js/models/hdxl1200.js"></script>
		<script src="js/models/v92sc.js"></script>
		<script src="js/models/trophy1949.js"></script>
		<script src="js/models/ninja650.js"></script>
		<script src="js/models/shiverGT.js"></script>
		<script src="js/models/thundercat.js"></script>
		<script src="js/models/mille.js"></script>
		<script src="js/models/boxer.js"></script>
		<script src="js/models/k1200s.js"></script>
		<script src="js/models/superBlackbird.js"></script>
		<script src="js/models/b1125.js"></script>
		<script src="js/models/tripleNine.js"></script>
		<script src="js/models/slingshot.js"></script>
		<script src="js/models/superSlingshot.js"></script>
		<script src="js/models/ninja1000r.js"></script>
		<script src="js/models/ninja1400.js"></script>
		<script src="js/models/f41000r.js"></script>
		<script src="js/models/castiglioni.js"></script>
		<script src="js/models/busa.js"></script>
		<script src="js/models/yzf1000.js"></script>
		<script src="js/models/baseTuner.js"></script>

		<script src="js/views/baseView.js"></script>
		<script src="js/views/bikeFormFieldsView.js"></script>
		<script src="js/views/bikeFormView.js"></script>
		<script src="js/views/bikeIndexView.js"></script>
		<script src="js/views/resultView.js"></script>

		<script src="js/collections/ecuUpgradeCollection.js"></script>
		<script src="js/collections/engineUpgradeCollection.js"></script>
		<script src="js/collections/exhaustUpgradeCollection.js"></script>
		<script src="js/collections/intakeUpgradeCollection.js"></script>
		<script src="js/collections/nitroUpgradeCollection.js"></script>
		<script src="js/collections/swingarmUpgradeCollection.js"></script>
		<script src="js/collections/tiresUpgradeCollection.js"></script>
		<script src="js/collections/turboUpgradeCollection.js"></script>
		<script src="js/collections/weightUpgradeCollection.js"></script>
		<script src="js/collections/wheelsUpgradeCollection.js"></script>
		<script src="js/collections/bikeCollection.js"></script>
		<script src="js/main.js"></script>
		<script>
			<?php
				$templates = array(
					"bikeFormView" => file_get_contents("templates/bikeFormView.hbs"),
					"bikeFormFieldsView" => file_get_contents("templates/bikeFormFieldsView.hbs"),
					"bikeIndexView" => file_get_contents("templates/bikeIndexView.hbs"),
					"resultView" => file_get_contents("templates/resultView.hbs")
				);
				echo "_tc.Templates = " . json_encode($templates);
			?>
		</script>
	</head>