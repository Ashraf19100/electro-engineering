$(document).ready(function ($) {
	//meanmenu
	$("#navbar nav").meanmenu();
	  
	  $(".slider-area").owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout:2000,
		responsive: {
		  0: {
			items: 1,
		  },
		  767: {
			items: 1,
		  },
		  1024: {
			items: 1,
		  },
		},
	  });
	  $(".brand-area").owlCarousel({
		autoWidth: false,
		items: 5,
		loop: true,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout:1200,
		navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
		mouseDrag: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  767: {
			items: 3,
		  },
		  1024: {
			items: 8,
		  },
		},
	  });
	//jQuery Sticky Area
	  $(".sticky-area").sticky({
		topSpacing: 0,
	  });
      
});
//product show js
const product = {
	all_category: [
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ACB.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ACBClose&TripCoil.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/Barometer.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/CableTray.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ClampMeter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/DigitalMultimeter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/DOLStarter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/Enclosure&JunctionBox.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/images.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/LeakDetector.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/VolumeBoster.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/SolenoidValve.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/ProfessionalValve.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/RoundAirCylinder.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/PressureReliefValve.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/PressureReducingRegulator.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/PneumaticFittings.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/FlowValve.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/FlowControlValve.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/FilterElement.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/EPPositioner.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/CompactCylinder.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/CheckValve.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/ButterflyValve.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/turbine-flow-meter.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/UltrasonicFlowmeter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/VortexFlowmeter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/Thermocouple.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/TemperatureTransducer.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/RadarLevelTransmitter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/Pt100Sensor.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PressureTransmitter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PressureGouge.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PhSensor.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PaddleLevelSwitch.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/LiquidAnalysis.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/IncrementalEncoder.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/MagneticRotaryEncoder.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/MotionRadarSensor.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Absolute_Rotary _Encoder.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Analog_Timer.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/abc-CPU.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/D-A_Input_Module.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/D-A_Output _Module.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Digital Timer.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/CentrifugalPump.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/ChemicalProcessPump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/Coupling.webp", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/DosingPump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/ElectricalSubmersiblePump.avif", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/GearPump.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/VerticalVolutePump.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/VerticalSumpPump.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/VerticalExtractionPump.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/NHChemicalProcessPump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/VisionSensor.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/SolidStatRelay.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/Throughbeamsensor.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ResignationSensor.webp", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ResignationSensor.avif", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ReflectiveSensor.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/PressureSensor.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/PhotomicroSensor.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/PhotoelectricSensor.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/MagneticProximitySensor.webp", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/VCB.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ThermalOverLoadRelay.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ThermalImager.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ThermalGun.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/SoftStarter.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/SelectorSwitch.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ResistanceTester.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/PushButtonSwitch.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/RCCB.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." }
		
	],
	Automation_control: [
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/IncrementalEncoder.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/MagneticRotaryEncoder.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/MotionRadarSensor.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Absolute_Rotary _Encoder.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Analog_Timer.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/abc-CPU.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/D-A_Input_Module.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/D-A_Output _Module.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Digital Timer.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Digital_Counter.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/HumanMachineInterface(HMI).jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/PressureSwitch.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/ProgrammableLogicController(PLC).jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/Relaywithbase.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/variableFrequencyDrive(VFD).webp", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/SafetyModule.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/ServoMotor.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/SignalConverter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/TemperatureController.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Automation&Control_System/UltrasonicSensor.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." }
		
	],
	pump_motor: [
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/CentrifugalPump.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/ChemicalProcessPump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/Coupling.webp", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/DosingPump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/ElectricalSubmersiblePump.avif", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/GearPump.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/VerticalVolutePump.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/VerticalSumpPump.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/VerticalExtractionPump.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/NHChemicalProcessPump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/MultistagePump.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/MultiphasePump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/MagneticDrivePump.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/In-LinePump.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/HorizontalSplitcasePump.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Pump&Motor/AMMagneticDrivePump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." }
		
	],
	sensors: [
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/VisionSensor.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/SolidStatRelay.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/Throughbeamsensor.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ResignationSensor.webp", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ResignationSensor.avif", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ReflectiveSensor.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/PressureSensor.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/PhotomicroSensor.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/PhotoelectricSensor.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/MagneticProximitySensor.webp", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/LimitSwitch.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/InductiveProximitySensor.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/FlowSensor.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/FiverOpticSensor.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/DisplacementSensor.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ContactSensor.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ConductiveSensor.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/ConductionMonitoringSensor.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Industrial_Sensors/CapacitiveProximitySensor.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." }
	],
	instromentattion: [
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/turbine-flow-meter.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/UltrasonicFlowmeter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/VortexFlowmeter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/Thermocouple.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/TemperatureTransducer.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/RadarLevelTransmitter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/Pt100Sensor.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PressureTransmitter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PressureGouge.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PhSensor.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/PaddleLevelSwitch.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/LiquidAnalysis.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/LevelTransmitter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/HydrostaticTransmitter.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/ElectromagneticFlow Meter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Instromentattion/DifferentialTransmitter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." }
	],
	pnuematic: [
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/VolumeBoster.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/SolenoidValve.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/ProfessionalValve.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/RoundAirCylinder.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/PressureReliefValve.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/PressureReducingRegulator.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/PneumaticFittings.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/FlowValve.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/FlowControlValve.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/FilterElement.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/EPPositioner.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/CompactCylinder.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/CheckValve.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/ButterflyValve.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/BurnerControl.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/BaseValve.jpg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/BallValve.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/AirFilterRegulator.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/AirProfileCylinder.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Pnuematic/Actuator.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." }
	],
	swicthgear_measuring: [
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ACB.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ACBClose&TripCoil.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/Barometer.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/CableTray.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ClampMeter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/DigitalMultimeter.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/DOLStarter.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/Enclosure&JunctionBox.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/images.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/LeakDetector.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/LightiingArrestors.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/MC.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/MCB.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/MCCB.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/MPCB.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/OilTester.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/PanelBox.webp", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/PowerAnalyzer.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/VerticalTurbinePump.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/VCB.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ThermalOverLoadRelay.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ThermalImager.jpeg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ThermalGun.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/SoftStarter.png", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/SelectorSwitch.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/ResistanceTester.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/PushButtonSwitch.jpg", title: "Jeans 1", description: "Stylish blue jeans." },
		{ img: "assets/img/WEBSITE/Product_Picture/Switchgear&Measuring/RCCB.jpeg", title: "Jeans 2", description: "Comfortable slim-fit jeans." }
	]
};

function loadProduct() {
	const params = new URLSearchParams(window.location.search);
	const category = params.get("category") || "all_category";
	const container = document.getElementById("products-container");
	container.innerHTML = "";
	
	if (product[category]) {
		product[category].forEach(product => {
			const card = `
				<div class="col-md-3">
            		<div class="product_card">
						<div class="product_img d-flex align-item-center justify-content-center">
							<img src="${product.img}" alt="product_title">
						</div>
						<div class="product_details text-center">
							<h3>product_title</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>

						</div>

            		</div>
        		</div>
			`;
			container.innerHTML += card;
		});
	}
}