// —————————————————————————————————————————————————————————————————————
// INTRO AND LOGO
// —————————————————————————————————————————————————————————————————————

// Logo functions
function logoIn() {
	let logoLine1 = document.querySelector(".logo-line-1");
	let logoLine2 = document.querySelector(".logo-line-2");
	let logoLine3 = document.querySelector(".logo-line-3");
	logoLine1.style.transform = "translateY(0vh) rotate(0deg)";
	setTimeout(() => {
		logoLine2.style.transform = "translateX(0vw) rotate(0deg)";
	}, 100);
	setTimeout(() => {
		logoLine3.style.transform = "translateY(0vh) rotate(0deg)";
	}, 600);
}
function logoOut() {
	let logo = document.querySelector(".logo");
	logo.style.transform = "translateY(-120vh) rotate(10deg)";
	logoAnimationLoop = false;
}
let logoAnimationLoop = true;
let logoFontVariation = true;
function logoAnimation() {
	let logoLetters = document.querySelectorAll(".logo span");
	let index = 0;
	let loop = setInterval(() => {
		if (logoAnimationLoop) {
			if (logoFontVariation) {
				logoLetters[index].style.fontVariationSettings = `'BASH' 100`;
			} else {
				logoLetters[index].style.fontVariationSettings = `'BASH' 0`;
			}
			index++;
			if (index >= logoLetters.length) {
				index = 0;
				logoFontVariation = !logoFontVariation;
				clearInterval(loop);
				setTimeout(() => {
					logoAnimation();
				}, 500);
			}
		} else {
			clearInterval(loop);
			return
		}
	}, 50);
}
let colors = ["red", "blue", "purple", "yellow", "pink", "green"];
let currentColor = 0;
let colorCycleToggle = true;
function colorCycle() {
	// Set initial primary color
	currentColor = Math.floor(Math.random()*colors.length);
	let color = colors[currentColor];
	document.querySelector(':root').style.setProperty("--primary", `var(--${color})`);
	// Set initial background styling
	let body = document.querySelector("body");
	body.style.backgroundImage = `url("graphics/background-${color}.gif")`;
	body.style.backgroundSize = `${Math.random()*50+50}px ${Math.random()*50+50}px`;
	// Color index iteration
	currentColor++;
	if (currentColor >= colors.length) {
		currentColor = 0;
	}
	// Main loop
	colorLoop = setInterval(() => {
		if (colorCycleToggle) {
			// Primary color change
			let color = colors[currentColor];
			document.querySelector(':root').style.setProperty("--primary", `var(--${color})`);
			// Background styling
			let body = document.querySelector("body");
			body.style.backgroundImage = `url("graphics/background-${color}.gif")`;
			body.style.backgroundSize = `${Math.random()*50+50}px ${Math.random()*50+50}px`;
			// Color index iteration
			currentColor++;
			if (currentColor >= colors.length) {
				currentColor = 0;
			}
		} else {
			clearInterval(colorLoop);
		}
	}, 5000);
}
// Intro on page load
setTimeout(() => {
	let logoLine1 = document.querySelector(".logo-line-1");
	let logoLine2 = document.querySelector(".logo-line-2");
	let logoLine3 = document.querySelector(".logo-line-3");
	logoLine1.style.transition = "0s";
	logoLine2.style.transition = "0s";
	logoLine3.style.transition = "0s";
	logoLine1.style.transform = `translateY(-75vh) rotate(${Math.random()*90-45}deg)`;
	logoLine2.style.transform = `translateX(-75vw) rotate(${Math.random()*90-45}deg)`;
	logoLine3.style.transform = `translateY(75vh) rotate(${Math.random()*90-45}deg)`;
	setTimeout(() => {
		logoLine1.style.transition = "transform 2s, background-color .5s, color .5s, fill .5s";
		logoLine2.style.transition = "transform 2s, background-color .5s, color .5s, fill .5s";
		logoLine3.style.transition = "transform 2s, background-color .5s, color .5s, fill .5s";
		logoIn();
	}, 50);
	setTimeout(() => {
		logoAnimation();
		colorCycle();
	}, 2000);
}, 50);



// —————————————————————————————————————————————————————————————————————
// NAVIGATION AND SETTINGS
// —————————————————————————————————————————————————————————————————————

// Nav and settings sidebar
function navIn() {
	let nav = document.querySelector("#nav");
	nav.style.transform = "translateX(0) rotate(0deg)";
}
function navOut() {
	let nav = document.querySelector("#nav");
	nav.style.transform = "translateX(300px) rotate(-30deg)";
}
let navState = true;
function navHide() {
	let navToggle = document.querySelector("#nav-toggle");
	if (navState) {
		navOut();
		setTimeout(() => {
			navToggle.style.right = "-100px";
			navState = false;
		}, 250);
	} else {
		navToggle.style.right = "-200px";
		setTimeout(() => {
			navIn();
			navState = true;
		}, 250);
	}
}
function settingsIn() {
	navOut();
	let settings = document.querySelector("#settings");
	setTimeout(() => {
		settings.style.transform = "translateX(0) rotate(0deg)";
	}, 250);
}
function settingsOut() {
	let settings = document.querySelector("#settings");
	settings.style.transform = "translateX(300px) rotate(-30deg)";
	setTimeout(() => {
		navIn();
	}, 250);
}

// Settings functions
function settingsFontSize(value) {
	let currentValue = getComputedStyle(document.documentElement).getPropertyValue('--player-fontsize');
	document.querySelector(':root').style.setProperty("--player-fontsize", parseFloat(currentValue) + value + "vw");
}
function settingsTracking(value) {
	let currentValue = getComputedStyle(document.documentElement).getPropertyValue('--player-letterspacing');
	document.querySelector(':root').style.setProperty("--player-letterspacing", parseFloat(currentValue) + value + "em");
}
function settingsLeading(value) {
	let currentValue = getComputedStyle(document.documentElement).getPropertyValue('--player-lineheight');
	document.querySelector(':root').style.setProperty("--player-lineheight", parseFloat(currentValue) + value + "em");
}
let caseOptions = ["unset", "uppercase", "capitalize", "lowercase"];
let currentCase = 0;
function settingsChangeCase() {
	currentCase++;
	if (currentCase >= caseOptions.length) {
		currentCase = 0;
	}
	document.querySelector(':root').style.setProperty("--player-texttransform", caseOptions[currentCase]);
}
function settingsChangeColor() {
	colorCycleToggle = false;
	currentColor++;
	if (currentColor >= colors.length) {
		currentColor = 0;
	}
	// Primary color change
	let color = colors[currentColor];
	document.querySelector(':root').style.setProperty("--primary", `var(--${color})`);
	// Background styling
	let body = document.querySelector("body");
	body.style.backgroundImage = `url("graphics/background-${color}.gif")`;
	body.style.backgroundSize = `${Math.random()*50+50}px ${Math.random()*50+50}px`;
}

// Menus
let currentMenu = "";
function menuIn(menuName) {
	colorCycleToggle = false;
	instrumentOut();
	navOut();
	currentMenu = "#"+menuName;
	let menuTarget = document.querySelector(currentMenu);
	menuTarget.style.transform = "translateX(0) rotate(0deg)";
	if (currentMenu == '#fontbox' || currentMenu == '#instrumentbox') {
		let grid = menuTarget.querySelectorAll('li');
		for (let item of grid) {
			item.style.transition = "0s";
			item.style.transform = `translate(${Math.random()*-500}px, ${Math.random()*-1000+500}px) rotate(${Math.random()*20-10}deg)`;
		}
		setTimeout(() => {
			for (let item of grid) {
				item.style.transition = "background-color .2s, color .2s, fill .2s, transform 1s";
				item.style.transform = `translate(0, 0) rotate(${Math.random()*20-10}deg)`;
			}
		}, 50)
	}
}
function menuOut() {
	let menuTarget = document.querySelector(currentMenu);
	menuTarget.style.transform = "translateX(-120vw) rotate(-15deg)";
	if (currentMenu == '#fontbox') {
		let fonts = menuTarget.querySelectorAll('li');
		for (let font of fonts) {
			font.style.transform = `translate(${Math.random()*-500}px, ${Math.random()*-200+100}px) rotate(${Math.random()*20-10}deg)`;
		}
	}
	instrumentIn();
	navIn();
}



// —————————————————————————————————————————————————————————————————————
// FONTS
// —————————————————————————————————————————————————————————————————————

let fontOptions = [
	'jost',
	'bashful',
	'powerpack',
	'thatthenthis',
	'minimochi',
	'dreidel',
	'galapagos',
	'authenticremixed'
]

// Select font from menu
function pickFont(selectedFont) {
	document.querySelector(':root').style.setProperty("--activefont", `${selectedFont}`);
	getAxisInfo(selectedFont, `fonts/${selectedFont}.ttf`);
	playPercussion('C2');
	menuOut();
}

// Read user-inputted font
document.getElementById('menubox-customfont').addEventListener('click', openDialog);
function openDialog() {
	// Make styled button open correct dialogue
	document.getElementById('menubox-customfont-input').click();
}
var newStyle = document.createElement('style');
if (window.FileList && window.File && window.FileReader) {
	document.getElementById('menubox-customfont-input').addEventListener('change', event => {
		newStyle.remove();

		// Validate file type
		const file = event.target.files[0];
		let fileType = file.name.split('.').pop().toLowerCase();
		if (fileType != 'ttf' && fileType != 'otf' && fileType != 'woff' && fileType != 'woff2') {
			window.alert('That’s not a valid font file! Try a .ttf, .otf, .woff, or .woff2 file.');
			document.getElementById('menubox-customfont-input').value = null;
			return;
		}
		let userFont = URL.createObjectURL(file);
		
		// Add font to document by creating new font style
		newStyle.appendChild(document.createTextNode(`
		@font-face{font-family:user;src:url('${userFont}');}`));
		document.head.appendChild(newStyle);
		document.querySelector(':root').style.setProperty("--activefont", `user`);

		// Reset input in case same file is selected
		document.getElementById('menubox-customfont-input').value = null;

		// Transition out
		getAxisInfo("user", userFont);
		menuOut();
	}); 
}

// Detect variable axes and limits
let axesInfo = [];
let fontName = "";
function getAxisInfo(fontFamily, fontUrl) {
	let font = new Font(fontFamily, {skipStyleSheet: true});
	font.src = fontUrl;
	font.onload = (e) => {
		axesInfo = [];
		let font = e.detail.font;
		let otTables = font.opentype.tables;
		fontName = otTables.name.get(1);

		// Get variable font axes
		if (otTables.fvar != undefined) {
			let axes = otTables.fvar.axes;
			axes.forEach((axis, a) => {
				let axisName = axis.tag;
				let axisMin = axis.minValue;
				let axisMax = axis.maxValue;
				let axisDefault = axis.defaultValue;
				axesInfo.push({name:axisName, min:axisMin, max:axisMax, default:axisDefault});
			})
			console.log(axesInfo);

			// Set CSS variables
			let temp = "";
			for (let i=0; i<axesInfo.length && i<4; i++) {
				document.querySelector(':root').style.setProperty(`--axis${i}-name`, `"${axesInfo[i].name}"`);
				document.querySelector(':root').style.setProperty(`--axis${i}-min`, `${axesInfo[i].min}`);
				document.querySelector(':root').style.setProperty(`--axis${i}-max`, `${axesInfo[i].max}`);
				if (i>0) {
					temp += ", ";
				}
				temp += `var(--axis${i}-name) var(--axis${i}-calculated)`;
			}
			document.querySelector(':root').style.setProperty(`--player-variation`, `${temp}`);
			initializeInstrument();
			console.log(getComputedStyle(document.body).getPropertyValue('--player-variation'));
		} else {
			console.log("No variable axes!");
			axesInfo = [];
			initializeInstrument();
		}
	}
}



// —————————————————————————————————————————————————————————————————————
// INSTRUMENTS
// —————————————————————————————————————————————————————————————————————

let playerState = false; // If instrument is currently playing, equals true
let instrumentOptions = ['sequencer']; // ['sequencer', 'oscillator', 'talker', 'texturizer']
let activeInstrument = "";

function instrumentIn() {
	// Reset all instruments
	for (let instrument of document.querySelectorAll(".instrument")) {
		instrument.style.display = "none";
	}
	document.querySelector("#"+activeInstrument).style.display = "grid"; // Show active instrument
	document.querySelector(".instrument-container").style.transform = `translateY(0) rotate(0)`; // Slide in container
}
function instrumentOut() {
	document.querySelector(".instrument-container").style.transform = "translateY(100vh) rotate(10deg)";
	playerState = false;
}

// Select instrument from menu
function pickInstrument(selectedInstrument) {
	playPercussion('C2');
	activeInstrument = selectedInstrument;
	instrumentIn();
	initializeInstrument();
	menuOut();
}

// Initalize instrument to work with font axes
let sequencerTextOptions = [
	"What are you listening to",
	"I like trains",
	"ABCDEFGHIJ 0123456789",
	"Hi mom",
	"How is the economy today",
	"Lavender lattes are superior",
	"Beep boop bop",
	"Ahhhhhhh Im so scared",
	"OoOoOoOo EeEeEeEe",
	"Tonight Im eating a smoothie",
	"Will you dance with me",
	"Heres a good joke",
	"Meep moop",
	"Oops I got engaged",
	"Hello father",
	"Check out my moves",
	"Sorry I was busy playing Animal Crossing",
	"Tomorrow Im too busy",
	"Will you engage with me",
	"Fourty two",
	"Next project will be less annoying",
	"Moonbug moonie chimkin chimmie mayor dinkins LIMMY",
	"What are we having for dinner",
	"Next question please",
	"Im having tears for dinner"
]
function initializeInstrument() {
	playerState = true;
	let instrumentDOM = document.querySelector("#"+activeInstrument);
	if (activeInstrument == 'sequencer') {
		// Initalize all axes to not show
		let sequencerAxes = instrumentDOM.querySelectorAll(".sequencer-beats-axis");
		sequencerAxes[0].dataset.sequencerAxisActive = '0';
		sequencerAxes[1].dataset.sequencerAxisActive = '0';
		sequencerAxes[2].dataset.sequencerAxisActive = '0';
		sequencerAxes[3].dataset.sequencerAxisActive = '0';

		// Randomize display text
		let displayText = document.querySelector(`.instrument-display-text`);
		displayText.innerText = sequencerTextOptions[Math.floor(Math.random()*sequencerTextOptions.length)];

		// Make sure current speed toggle is active
		let speedToggle = instrumentDOM.querySelector(`[data-sequencer-speed="${sequencerSpeed}"]`);
		speedToggle.dataset.buttonState = "1";

		// Check if font is actually variable
		if (axesInfo.length == 0) {
			instrumentDOM.querySelector(".instrument-error").style.display = "flex";
			for (let control of instrumentDOM.querySelectorAll(".instrument-function")) {
				control.style.display = "none";
			}
		} else {
			instrumentDOM.querySelector(".instrument-error").style.display = "none";
			for (let control of instrumentDOM.querySelectorAll(".instrument-function")) {
				control.style.display = "grid";
			}
			for (let i=0; i<axesInfo.length && i<4; i++) {
				sequencerAxes[i].dataset.sequencerAxisActive = '1';
			}
			sequencerLoop();
		}
	}
	if (activeInstrument == 'talkbox') {
		// TO DO ——————————————————————————————————————————————————————————————————————
	}
	if (activeInstrument == 'texturizer') {
		// TO DO ——————————————————————————————————————————————————————————————————————
	}
	if (activeInstrument == 'oscillator') {
		// TO DO ——————————————————————————————————————————————————————————————————————
	}
}



// —————————————————————————————————————————————————————————————————————
// GENERIC UI FUNCTIONS
// —————————————————————————————————————————————————————————————————————

// Initalize all state-enabled buttons to show the correct value
for (let button of document.querySelectorAll(".instrument-state")) {
	instrumentStateUpdate(button)
}

// Button with multiple states
let instrumentStateNotes = ['C3','D3','E3','F3','G3','A3','B3'];
function instrumentStatePress(e) {
	let fill = e.querySelector(".instrument-state-fill");
	let currentState = parseInt(e.dataset.stateValue);
	let maxState = parseInt(e.dataset.stateMax);
	currentState++;
	if (currentState > maxState) {
		currentState = 0;
	}
	e.dataset.stateValue = (currentState).toString();
	let percentFill = currentState/maxState;
	fill.style.width = percentFill*100 + "%";
	fill.style.height = percentFill*100 + "%";
	playBlock(instrumentStateNotes[currentState]);
}

// Update button state to match current value
function instrumentStateUpdate(e) {
	let fill = e.querySelector(".instrument-state-fill");
	let currentState = parseInt(e.dataset.stateValue);
	let maxState = parseInt(e.dataset.stateMax);
	let percentFill = currentState/maxState;
	fill.style.width = percentFill*100 + "%";
	fill.style.height = percentFill*100 + "%";
}

// Group of toggles with one active option
function instrumentButtonGroupPress(e, group) {
	if (e.dataset.buttonState == "1") {
		e.dataset.buttonState = "0";
	} else {
		let groupMembers = document.querySelectorAll(`[data-button-group='${group}'] button`)
		for (let button of groupMembers) {
			button.dataset.buttonState = "0";
		}
		e.dataset.buttonState = "1";
	}
}



// —————————————————————————————————————————————————————————————————————
// SEQUENCER
// —————————————————————————————————————————————————————————————————————

// Sound mode selection
let sequencerSound = 0;
let sequencerSoundPercussion = [
	['A3','D5','E3','E1'],
	['C3','A1','E0','E4'],
	['D6','F7','D7','F2'],
	['C0','G0','B7','B5']
];
let sequencerSoundToms = [
	['100', '120', '140', '160'],
	['180', '200', '220', '240'],
	['260', '280', '300', '320'],
	['340','360','380','400']
];
let sequencerSoundNote = [
	['C2','E2','G2','B2'],
	['C1','E1','G1','B1'],
	['C3','E3','G3','B3'],
	['C4','E4','G4','B4']
];
let sequencerSoundVoice = [
	['a','b','c','d'],
	['1','2','3','4'],
	['e','f','g','h'],
	['5','6','7','8']
];
let sequencerSoundVoicePitch = [
	['C3','D3',"E3"],
	['C4','D4',"E4"],
	['C2','D2','E2'],
	['C1','D1','E1']
]
function sequencerSoundAdjust() {
	sequencerSound++;
	if (sequencerSound >= 5) {
		sequencerSound = 0;
	}
}

// Randomize beat values
function sequencerRandomize() {
	let iteration = 0;
	let loop = setInterval(() => {
		playBlock(Math.random()*150+150);
		let sequencerBeats = document.querySelectorAll(`[data-sequencer-beat]`);
		for (let beat of sequencerBeats) {
			beat.dataset.stateValue = Math.round(Math.random()*beat.dataset.stateMax);
			instrumentStateUpdate(beat);
		}
		iteration++;
		if (iteration >= 3) {
			clearInterval(loop);
		}
	}, 100)
}

// Adjust speed
function sequencerSpeedAdjust(e) {
	sequencerSpeed = e.dataset.sequencerSpeed;
	document.querySelector(':root').style.setProperty(`--player-variation-speed`, `${sequencerSpeed}ms`);
	if (e.dataset.buttonState == '1') {
		playerState = false;
	} else if (playerState == false) {
		playerState = true;
		sequencerLoop();
	}
}

// Main loop
let sequencerSpeed = 400;
let sequencerBeat = 0;
function sequencerLoop() {
	document.querySelector("#sequencer .instrument-error").style.display = "none";
	for (let i=0; i<4 && i<axesInfo.length; i++) {
		let currentBeat = document.querySelector(`[data-sequencer-axis="${i}"] [data-sequencer-beat="${sequencerBeat}"]`);
		let beatValue = currentBeat.dataset.stateValue;
		if (beatValue == 0) {
			document.querySelector(':root').style.setProperty(`--axis${i}-percent`, `${0}`);
		}
		if (beatValue == 1) {
			document.querySelector(':root').style.setProperty(`--axis${i}-percent`, `${.25}`);
			if (sequencerSound == 0) {
				playPercussion(sequencerSoundPercussion[i][0]);
			} else if (sequencerSound == 1) {
				playTom(sequencerSoundToms[i][0]);
			} else if (sequencerSound == 2) {
				playPiano(sequencerSoundNote[i][0]);
			} else if (sequencerSound == 3) {
				playVoice(sequencerSoundVoice[i][0], sequencerSoundVoicePitch[i], 100);
			}
		} else if (beatValue == 2) {
			document.querySelector(':root').style.setProperty(`--axis${i}-percent`, `${.5}`);
			if (sequencerSound == 0) {
				playPercussion(sequencerSoundPercussion[i][1]);
			} else if (sequencerSound == 1) {
				playTom(sequencerSoundToms[i][1]);
			} else if (sequencerSound == 2) {
				playPiano(sequencerSoundNote[i][1]);
			} else if (sequencerSound == 3) {
				playVoice(sequencerSoundVoice[i][1], sequencerSoundVoicePitch[i], 100);
			}
		} else if (beatValue == 3) {
			document.querySelector(':root').style.setProperty(`--axis${i}-percent`, `${.75}`);
			if (sequencerSound == 0) {
				playPercussion(sequencerSoundPercussion[i][2]);
			} else if (sequencerSound == 1) {
				playTom(sequencerSoundToms[i][2]);
			} else if (sequencerSound == 2) {
				playPiano(sequencerSoundNote[i][2]);
			} else if (sequencerSound == 3) {
				playVoice(sequencerSoundVoice[i][2], sequencerSoundVoicePitch[i], 100);
			}
		} else if (beatValue == 4) {
			document.querySelector(':root').style.setProperty(`--axis${i}-percent`, `${1}`);
			if (sequencerSound == 0) {
				playPercussion(sequencerSoundPercussion[i][3]);
			} else if (sequencerSound == 1) {
				playTom(sequencerSoundToms[i][3]);
			} else if (sequencerSound == 2) {
				playPiano(sequencerSoundNote[i][3]);
			} else if (sequencerSound == 3) {
				playVoice(sequencerSoundVoice[i][3], sequencerSoundVoicePitch[i], 100);
			}
		}
		for (let beat of document.querySelectorAll(`[data-sequencer-axis="${i}"] [data-sequencer-beat]`)) {
			beat.style.backgroundColor = "var(--dark)";
		}
		currentBeat.style.backgroundColor = "var(--light)";
	}
	sequencerBeat++;
	if (sequencerBeat >= 8) {
		sequencerBeat = 0;
	}
	setTimeout(() => {
		if (playerState == false) {
			return
		}
		sequencerLoop();
	}, sequencerSpeed)
}



// —————————————————————————————————————————————————————————————————————
// AUDIO
// —————————————————————————————————————————————————————————————————————

// Start audio context
async function startAudioContext() {
	await Tone.start();
	console.log('Audio context is ready!');
	document.querySelector('body').style.cursor = "unset";
	document.querySelector('body').removeEventListener('click', startAudioContext);
	document.querySelector('.intro-text').style.transform = "translate(-50%, 200px) rotate(-20deg)";
	colorCycleToggle = false;
	logoOut();

	// Pick random font
	let randomFont = fontOptions[Math.floor(Math.random()*fontOptions.length)];
	document.querySelector(':root').style.setProperty("--activefont", `${randomFont}`);
	getAxisInfo(randomFont, `fonts/${randomFont}.ttf`);

	// Pick random instrument
	let randomInstrument = instrumentOptions[Math.floor(Math.random()*instrumentOptions.length)]
	activeInstrument = previousInstrument = randomInstrument;
	console.log(activeInstrument);
	instrumentIn();

	navIn();
}
setTimeout(() => {
	document.querySelector('body').style.cursor = "pointer";
	document.querySelector('.intro-text').style.transform = "translate(-50%, 0px) rotate(0)";
	document.querySelector('body').addEventListener('click', startAudioContext);
}, 2000)

// Menu synth
let synth = new Tone.PolySynth();
synth.set({
	oscillator: {
		type: "sawtooth12"
	},
	envelope: {
		attack: 0.05,
		decay: 0.2,
		sustain: .5,
		release: .5
	},
	volume: -6
}).toDestination();
function playNote(freq) {
	synth.triggerAttackRelease(freq, .15);
}
function changeSynth(synthType) {
	synth.set({oscillator: {type: synthType}});
}

// Piano sampler
const pianoSampler = new Tone.Sampler({
	urls: {
		C1: "c1.mp3",
		C2: "c2.mp3",
		C3: "c3.mp3",
		C4: "c4.mp3",
		C5: "c5.mp3",
		C6: "c6.mp3"
	},
	envelope: {
		attack: 0.05,
		decay: 0.2,
		sustain: .5,
		release: .5
	},
	baseUrl: "sounds/piano/",
	volume: -10,
}).toDestination();
function playPiano(sample) {
	pianoSampler.triggerAttackRelease(sample, .5, "+0", `+${Math.random()*.5+.5}`);
}

// Percussion sampler
const percussionSampler = new Tone.Sampler({
	urls: {
		C0: "agogo-low.mp3",
		D0: "agogo-high.mp3",
		E0: "block.mp3",
		F0: "bongo-low.mp3",
		G0: "bongo-high.mp3",
		A0: "cabasa-low.mp3",
		B0: "cabasa-high.mp3",
		C1: "castanet.mp3",
		D1: "chimes.mp3",
		E1: "clap.mp3",
		F1: "conga-low.mp3",
		G1: "conga-high.mp3",
		A1: "cowbell.mp3",
		B1: "crash-low.mp3",
		C2: "crash-mid.mp3",
		D2: "crash-high.mp3",
		E2: "cuica-low.mp3",
		F2: "cuica-high.mp3",
		G2: "drum-low.mp3",
		A2: "drum-high.mp3",
		B2: "gong.mp3",
		C3: "guiro.mp3",
		D3: "guiro-hit.mp3",
		E3: "hat-closed.mp3",
		F3: "hat-open.mp3",
		G3: "jingle.mp3",
		A3: "kick-low.mp3",
		B3: "kick-high.mp3",
		C4: "kick-808.mp3",
		D4: "ride-low.mp3",
		E4: "ride-mid.mp3",
		F4: "ride-high.mp3",
		G4: "rim-low.mp3",
		A4: "rim-high.mp3",
		B4: "rim-ring.mp3",
		C5: "shaker.mp3",
		D5: "snare.mp3",
		E5: "snare-deep.mp3",
		F5: "snare-loose.mp3",
		G5: "snare-808.mp3",
		A5: "spin-down.mp3",
		B5: "spin-up.mp3",
		C6: "sticks.mp3",
		D6: "tambourine.mp3",
		E6: "tom0.mp3",
		F6: "tom1.mp3",
		G6: "tom2.mp3",
		A6: "tom3.mp3",
		B6: "tom4.mp3",
		C7: "tom5.mp3",
		D7: "triangle-muted.mp3",
		E7: "triangle-open.mp3",
		F7: "vibraslap.mp3",
		G7: "whistle-low.mp3",
		A7: "whistle-high.mp3",
		B7: "woodblock-low.mp3",
		C8: "woodblock-high.mp3",
		D8: "woodblock-higher.mp3"
	},
	baseUrl: "sounds/percussion/",
	volume: -10,
}).toDestination();
let percussionNotes = ["C0","D0","E0","F0","G0","A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A7","B7","C8","D8"]
function playPercussion(sample) {
	if (sample == "random") {
		percussionSampler.triggerAttackRelease(percussionNotes[Math.floor(Math.random()*percussionNotes.length)], 1);
	} else {
		percussionSampler.triggerAttackRelease(sample, 1);
	}
}

// Pitched tom sampler
const tomSampler = new Tone.Sampler({
	urls: {
		C3: "tom2.mp3",
	},
	baseUrl: "sounds/percussion/",
	volume: -10,
}).toDestination();
function playTom(freq) {
	tomSampler.triggerAttackRelease(freq, 1);
}

// Pitched woodblock sampler
const blockSampler = new Tone.Sampler({
	urls: {
		C4: "woodblock-higher.mp3",
	},
	baseUrl: "sounds/percussion/",
	volume: -10,
}).toDestination();
function playBlock(freq) {
	blockSampler.triggerAttackRelease(freq, 1);
}

// Voice sampler ("Animalese")
let voiceSamplerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
let voiceSamplers = {}
for (let letter of voiceSamplerLetters) {
	voiceSamplers[letter] = new Tone.Sampler({
		urls: {
			C3: `${letter}.mp3`
		},
		baseUrl: "sounds/voice/",
		volume: -10,
	}).toDestination();
}
function playVoice(phrase, pitch, speed) {
	phrase = phrase.toLowerCase();
	if (phrase != "") {
		let letter = phrase[0];
		if (letter != " ") {
			voiceSamplers[letter].triggerAttackRelease(pitch[Math.floor(Math.random()*pitch.length)], .5);
		}
		let newPhrase = phrase.slice(1);
		setTimeout(() => {
			playVoice(newPhrase, pitch, speed);
		}, speed)
	}
}