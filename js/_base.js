;(function ($, win) {
	win.TuneCalc = win._tc = $.extend(true, {}, Backbone.Events, {
		EventNames: {
			FieldChanged: "FieldChanged",
			TemplateReceived: "TemplateReceived",
			ModelReCalc: "ModelReCalc"
		},
		Utils: {
			proxy: function (func) {
        var self = this;
        return function() {
          return func.apply(self, arguments);
        };
      }
		},
		Factory: {
      Upgrades: {
      	Ecu: {},
      	Engine: {},
      	Intake: {},
      	Exhaust: {},
      	Nitro: {},
      	Turbo: {},
      	Weight: {},
      	Wheels: {},
      	Swingarm: {},
      	Tires: {}
      },
      Parts: {
      	BasePart: {},
      	Engine: {},
      	Sprockets: {
      		Front: {},
      		Rear: {}
      	},
      	GearBox: {},
      	Nitro: {},
      	Power: {},
      	Ratios: {
      		Primary: {},
      		Secondary: {},
      		Overall: {
      			Gear1: {},
      			Gear2: {},
      			Gear3: {},
      			Gear4: {},
      			Gear5: {},
      			Gear6: {}
      		}
      	},
      	Swingarm: {},
      	Tires: {
      		Front: {},
      		Rear: {}
      	},
      	Torque: {},
      	Weight: {},
      	WheelBase: {}
      },
      UI: {
      	Image: {}
      },
			Models: {
				BaseBike: {},
				B1125: {},
				Boxer: {},
				Busa: {},
				Castiglioni: {},
				F4100R: {},
				HDXL1200: {},
				K1200S: {},
				Mille: {},
				Ninja1000R: {},
				Ninja1400: {},
				Ninja650: {},
				ShiverGT: {},
				Slingshot: {},
				superBlackbird: {},
				superSlingshot: {},
				Thundercat: {},
				TripleNine: {},
				Trophy1949: {},
				V92SC: {},
				YZF1000: {}
			},
			Views: {
				BaseView: {},
				BikeFormFieldsView: {},
				BikeFormView: {},
				BikeIndexView: {},
				ResultView: {}
			},
			Collections: {
				BikeCollection: {},
				EcuUpgradeCollection: {},
				EngineUpgradeCollection: {},
				ExhaustUpgradeCollection: {},
				IntakeUpgradeCollection: {},
				NitroUpgradeCollection: {},
				SwingarmUpgradeCollection: {},
				TiresUpgradeCollection: {},
				TurboUpgradeCollection: {},
				WeightUpgradeCollection: {},
				WheelsUpgradeCollection: {}
			}
		},
		bikes: []
	});

})(jQuery, window);