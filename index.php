<!doctype html>
<html>
	<head>
		<title>Tuning Calculator</title>
		<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" rel="stylesheet" type="text/css"></link>
		<link href="css/main.css" rel="stylesheet" type="text/css"></link>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.0.3/js.cookie.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.js"></script>
		<script src="js/_base.js"></script>
		<script>
			<?php
				$templates = array(
					"formView" => file_get_contents("templates/form.hbs"),
					"bikeView" => file_get_contents("templates/bike.hbs")
				);
				echo "_tc.Templates = " . json_encode($templates);
			?>
		</script>
		<script src="js/models/tuner.js"></script>
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

		<script src="js/views/bikeView.js"></script>
		<script src="js/views/formView.js"></script>

		<script src="js/main.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<form id="bikeCalc" class="formView">
  			//Form View Should be rendered here
		</form>
	</body>
</html>