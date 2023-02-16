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
function settingsSetCase() {
	currentCase++;
	if (currentCase >= caseOptions.length) {
		currentCase = 0;
	}
	document.querySelector(':root').style.setProperty("--player-texttransform", caseOptions[currentCase]);
}
let toggleAnimations = true;
function settingsToggleAnimations() {
	if (toggleAnimations) {
		toggleAnimations = false;
		for (i of document.querySelectorAll(".instrument-display-text")) {
			i.dataset.toggle = "1";
		}
	} else {
		toggleAnimations = true;
		for (i of document.querySelectorAll(".instrument-display-text")) {
			i.dataset.toggle = "0";
		}
	}
}
function settingsSwapColor() {
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
	fontReset();
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
			let axisNumber = 0;
			for (axisNumber; axisNumber<axesInfo.length && axisNumber<4; axisNumber++) {
				for (let axisDisplay of document.querySelectorAll(`.instrument-axesinfo-${axisNumber}`)) {
					axisDisplay.style.display = "flex";
				}
				document.querySelector(':root').style.setProperty(`--axis${axisNumber}-name`, `"${axesInfo[axisNumber].name}"`);
				document.querySelector(':root').style.setProperty(`--axis${axisNumber}-min`, `${axesInfo[axisNumber].min}`);
				document.querySelector(':root').style.setProperty(`--axis${axisNumber}-max`, `${axesInfo[axisNumber].max}`);
				if (axisNumber>0) {
					temp += ", ";
				}
				temp += `var(--axis${axisNumber}-name) var(--axis${axisNumber}-calculated)`;
			}
			for (axisNumber; axisNumber<4; axisNumber++) {
				for (let axisDisplay of document.querySelectorAll(`.instrument-axesinfo-${axisNumber}`)) {
					axisDisplay.style.display = "none";
				}
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

// Reset font settings
function fontReset() {
	document.querySelector(':root').style.setProperty(`--player-fontsize`, `4vw`);
	document.querySelector(':root').style.setProperty(`--player-letterspacing`, `0px`);
	document.querySelector(':root').style.setProperty(`--player-lineheight`, `1em`);
	document.querySelector(':root').style.setProperty(`--player-texttransform`, `1em`);
	toggleAnimations = true;
	for (i of document.querySelectorAll(".instrument-display-text")) {
		i.dataset.toggle = "0";
	}
}



// —————————————————————————————————————————————————————————————————————
// RANDOM SENTENCE GENERATOR
// —————————————————————————————————————————————————————————————————————

let nouns = ["arrangement", "art", "artwork", "build", "body", "character", "construction", "contour", "design", "drawing", "figure", "font", "form", "formation", "glyph", "graphic", "letter", "letterform", "line", "object", "outline", "piece", "scene", "shape", "sketch", "structure", "subject", "typeface", "typography"];
let verbs = ["adapted", "adjusted", "animated", "altered", "changed", "converted", "diverged", "evolved", "interpolated", "mutated", "reshaped", "reassembled", "reconstructued", "regenerated", "transfigured", "transformed", "transmuted", "translated", "tuned", "turned", "varied"];
let adjectives = ["abstract", "absorbing", "aesthetic", "appealing", "authentic", "balanced", "bold", "clean", "colorful", "contemplative", "creative", "daring", "dazzling", "decorative", "delicate", "dense", "divine", "dramatic", "dynamic", "elegant", "elevated", "emotional", "exquisite", "fluid", "geometric", "gorgeous", "grand", "harmonious", "imaginative", "impassioned", "impeccable", "inspired", "jagged", "lifelike", "light", "maximalist", "minimalist", "moving", "musical", "organic", "ornamental", "pleasing", "polished", "profound", "radiant", "rich", "stunning", "stylish", "sublime", "surreal", "tasteful", "traditional", "tranquil", "unforgettable", "unpredictable", "varied"];
let adverbs = ["abnormally", "awkwardly", "beautifully", "briskly", "calmly", "cleverly", "cooly", "deliberately", "delightfully", "elegantly", "energetically", "excitedly", "frantically", "frightfully", "gently", "gleefully", "hastily", "intensely", "jubilantly", "kookily", "lavishly", "lazily", "lightly", "loudly", "lovingly", "majestically", "naturally", "neatly", "nervously", "noisily", "playfully", "precisely", "punctually", "quickly", "quizzically", "randomly", "rapidly", "repeatedly", "sharply", "shockingly", "sleepily", "slowly", "suddenly", "tenderly", "tremendously", "unexpectedly", "viciously", "warmly", "zestfully"];
let prepositions = ["into", "to", "toward"];
function isVowel(x) {
	let result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
	return result;
}
function randomSentence() {
	let noun1 = nouns[Math.floor(Math.random()*nouns.length)];
	let noun2 = nouns[Math.floor(Math.random()*nouns.length)];
	let verb = verbs[Math.floor(Math.random()*verbs.length)];
	let adjective1 = adjectives[Math.floor(Math.random()*adjectives.length)];
	let adjective2 = adjectives[Math.floor(Math.random()*adjectives.length)];
	let article = "a";
	if (isVowel(adjective2.charAt(0)) == true) {
		article = "an";
	}
	let adverb = adverbs[Math.floor(Math.random()*adverbs.length)];
	let preposition = prepositions[Math.floor(Math.random()*prepositions.length)];
	return `The ${adjective1} ${noun1} ${adverb} ${verb} ${preposition} ${article} ${adjective2} ${noun2}`;
};
// Generate random letters
function randomLetters(quantity) {
	let temp = "";
	for (let i=0; i<quantity; i++) {
		temp += voiceSamplerLetters[Math.floor(Math.random()*voiceSamplerLetters.length)].toUpperCase();
	}
	return temp;
}
// Generate a whole bunch of the same letter
function randomLettersRepeat(quantity) {
	let temp = "";
	let letter = voiceSamplerLetters[Math.floor(Math.random()*voiceSamplerLetters.length)].toUpperCase();
	for (let i=0; i<quantity; i++) {
		temp += letter;
	}
	return temp;
}



// —————————————————————————————————————————————————————————————————————
// INSTRUMENTS
// —————————————————————————————————————————————————————————————————————

let playerState = false; // If instrument is currently playing, equals true
let instrumentOptions = ['sequencer', 'scrambler', 'analyzer']; // ['oscillator', 'talker', 'texturizer']
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
	fontReset();
	activeInstrument = selectedInstrument;
	instrumentIn();
	initializeInstrument();
	menuOut();
}

// Initalize instrument to work with font axes
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

		// Reset sound setting
		sequencerSound = 0;

		// Randomize display text
		let displayText = instrumentDOM.querySelector(`.instrument-display-text`);
		displayText.innerText = randomSentence();

		// Make sure current speed toggle is active
		let speedToggle = instrumentDOM.querySelector(`[data-sequencer-speed="${sequencerSpeed}"]`);
		document.querySelector(':root').style.setProperty(`--player-variation-speed`, `${sequencerSpeed*.95}ms`);
		speedToggle.dataset.buttonState = "1";

		// Check if font is actually variable and show correct controls
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
	if (activeInstrument == 'scrambler') {
		// Reset sound setting
		scramblerSound = 0;

		// Randomize display text
		let displayText = instrumentDOM.querySelector(`.instrument-display-text`);
		displayText.innerText = randomSentence();
		displayText.innerHTML = wrapLetters(displayText.innerText);

		// Make sure current speed toggle is active
		let speedToggle = instrumentDOM.querySelector(`[data-scrambler-speed="${scramblerSpeed}"]`);
		document.querySelector(':root').style.setProperty(`--player-variation-speed`, `${scramblerSpeed*.95}ms`);
		speedToggle.dataset.buttonState = "1";

		// Check if font is actually variable and show correct controls
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
			scramblerLoop();
		}
	}
	if (activeInstrument == 'analyzer') {
		// Set transition to instant
		document.querySelector(':root').style.setProperty(`--player-variation-speed`, `unset`);

		// Initalize all axes to not show
		let analyzerAxes = instrumentDOM.querySelectorAll(".instrument-slider-container");
		analyzerAxes[0].dataset.sliderActive = '0';
		analyzerAxes[1].dataset.sliderActive = '0';
		analyzerAxes[2].dataset.sliderActive = '0';
		analyzerAxes[3].dataset.sliderActive = '0';
		
		// Check if font is actually variable and show correct controls
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
				analyzerAxes[i].dataset.sliderActive = '1';
				let axisSlider = instrumentDOM.querySelector(`[data-analyzer-axis="${i}"]`);
				let axisSliderValue = axisSlider.dataset.sliderValue;
				document.querySelector(':root').style.setProperty(`--axis${i}-percent`, `${axisSliderValue/100}`);
			}
		}
	}
	if (activeInstrument == 'conversator') {
		// // Initalize all axes to not show
		// let scamblerAxes = instrumentDOM.querySelectorAll("[data-scrambler-axis]");
		// scamblerAxes[0].dataset.scramblerAxisActive = '0';
		// scamblerAxes[1].dataset.scramblerAxisActive = '0';
		// scamblerAxes[2].dataset.scramblerAxisActive = '0';
		// scamblerAxes[3].dataset.scramblerAxisActive = '0';

		// // Randomize display text
		// let displayText = instrumentDOM.querySelector(`.instrument-display-text`);
		// displayText.innerHTML = randomLetters(200);

		// // Make sure current speed toggle is active
		// let speedToggle = instrumentDOM.querySelector(`[data-scrambler-speed="${scramblerSpeed}"]`);
		// document.querySelector(':root').style.setProperty(`--player-variation-speed`, `${scramblerSpeed*.95}ms`);
		// speedToggle.dataset.buttonState = "1";

		// // Check if font is actually variable and show correct controls
		// if (axesInfo.length == 0) {
		// 	instrumentDOM.querySelector(".instrument-error").style.display = "flex";
		// 	for (let control of instrumentDOM.querySelectorAll(".instrument-function")) {
		// 		control.style.display = "none";
		// 	}
		// } else {
		// 	instrumentDOM.querySelector(".instrument-error").style.display = "none";
		// 	for (let control of instrumentDOM.querySelectorAll(".instrument-function")) {
		// 		control.style.display = "grid";
		// 	}
		// 	for (let i=0; i<axesInfo.length && i<4; i++) {
		// 		scamblerAxes[i].dataset.scramblerAxisActive = '1';
		// 	}
		// 	scramblerLoop();
		// }
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
	let parent = document.querySelector(`[data-button-group='${group}']`);
	let groupType = parent.dataset.buttonGroupType;
	let groupMembers = document.querySelectorAll(`[data-button-group='${group}'] button`);
	if (groupType == "toggle") {
		if (e.dataset.buttonState == "1") {
			e.dataset.buttonState = "0";
		} else {
			for (let button of groupMembers) {
				button.dataset.buttonState = "0";
			}
			e.dataset.buttonState = "1";
		}
	} else if (groupType == "set") {
		for (let button of groupMembers) {
			button.dataset.buttonState = "0";
		}
		e.dataset.buttonState = "1";
	} else if (groupType == "multiple") {
		if (e.dataset.buttonState == "1") {
			e.dataset.buttonState = "0";
		} else {
			e.dataset.buttonState = "1";
		}
	}
}

let activeSlider;
function instrumentSlider(slider, funct) {
	activeSlider = slider; 
	document.onmousemove = instrumentSliderSet;
    document.onmouseup = instrumentSliderStop;
	funct(slider);
}
function instrumentSliderSet() {
	let e = window.event;
    e.preventDefault();
	let mousePos = e.clientY;
	let sliderHeight = activeSlider.offsetHeight - 8;
	let sliderTop = activeSlider.getBoundingClientRect().top + 4;
	let sliderFill = activeSlider.querySelector(".instrument-slider-fill");
	let sliderCalc = (-((mousePos-sliderTop)/sliderHeight)+1)*100;
	if (sliderCalc < 1) {
		activeSlider.dataset.sliderValue = "0";
		sliderFill.style.height = "0%";
		playMono(260);
	} else if (sliderCalc > 100) {
		activeSlider.dataset.sliderValue = "100";
		sliderFill.style.height = "100%";
		playMono(520);
	} else {
		activeSlider.dataset.sliderValue = sliderCalc;
		sliderFill.style.height = sliderCalc + "%";
		playMono(260+(sliderCalc/100)*260);
	}
}
function instrumentSliderStop() {
	document.onmouseup = null;
	document.onmousemove = null;
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

// Generate random text
function sequencerGenerateText() {
	let selection = Math.floor(Math.random()*3);
	let sequencerDOM = document.querySelector("#sequencer");
	let displayText = sequencerDOM.querySelector(`.instrument-display-text`);
	if (selection == 0) {
		displayText.innerText = randomSentence();
	} else if (selection == 1) {
		displayText.innerText = randomLetters(50);
	} else {
		displayText.innerText = randomLettersRepeat(50);
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
let sequencerSpeed = 700;
function sequencerSpeedAdjust(e) {
	sequencerSpeed = e.dataset.sequencerSpeed;
	document.querySelector(':root').style.setProperty(`--player-variation-speed`, `${sequencerSpeed*.95}ms`);
	if (e.dataset.buttonState == '1') {
		playerState = false;
	} else if (playerState == false) {
		playerState = true;
		sequencerLoop();
	}
}

// Main loop
let sequencerBeat = 0;
function sequencerLoop() {
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
	}, sequencerSpeed);
}



// —————————————————————————————————————————————————————————————————————
// SCRAMBLER
// —————————————————————————————————————————————————————————————————————

// Sound mode selection
let scramblerSound = 0;
let scramblerVoice = [
	['C4','D4','E4'],
	['C3','D3',"E3"],
	['C1','D1',"E1"]
];
let scramblerPiano = [
	['C3','E3','G3','B3'],
	['C2','E2','G2','B2'],
	['C1','E1','G1','B1'],
];
function scramblerSoundAdjust() {
	scramblerSound++;
	if (scramblerSound >= 5) {
		scramblerSound = 0;
	}
}

// Randomize scramble values
function scramblerRandomize() {
	let scramblerDOM = document.querySelector("#scrambler");
	let scramblerLetters = scramblerDOM.querySelectorAll(".scrambler-display span");
	for (let i=0; i<scramblerLetters.length; i++) {
		let activeLetter = scramblerLetters[Math.floor(Math.random()*scramblerLetters.length)];
		let temp = "";
		for (let j=0; j<axesInfo.length; j++) {
			let axis = axesInfo[j].name;
			let axisRandom = (axesInfo[j].max-axesInfo[j].min)*Math.random() + axesInfo[j].min;
			temp += `"${axis}" ${axisRandom}` ;
			if (j<axesInfo.length-1) {
				temp += ", ";
			}
		}
		activeLetter.style.fontVariationSettings = temp;
	}
	// Sounds
	playBlock(Math.random()*200+100);
	setTimeout(() => {
		playBlock(Math.random()*200+100);
	}, 100);
	setTimeout(() => {
		playBlock(Math.random()*200+100);
	}, 200);
}

// Generate random text
function scramblerGenerateText() {
	let selection = Math.floor(Math.random()*3);
	let scramblerDOM = document.querySelector("#scrambler");
	let displayText = scramblerDOM.querySelector(`.instrument-display-text`);
	if (selection == 0) {
		displayText.innerText = randomSentence();
	} else if (selection == 1) {
		displayText.innerText = randomLetters(50);
	} else {
		displayText.innerText = randomLettersRepeat(50);
	}
	displayText.innerHTML = wrapLetters(displayText.innerText);
}

// Adjust quantity
let scramblerQuantity = 0.25;
function scramblerQuantityAdjust(e) {
	scramblerQuantity = e.dataset.scramblerQuantity;
}

// Adjust speed
let scramblerSpeed = 500;
function scramblerSpeedAdjust(e) {
	scramblerSpeed = e.dataset.scramblerSpeed;
	document.querySelector(':root').style.setProperty(`--player-variation-speed`, `${scramblerSpeed*.95}ms`);
	if (e.dataset.buttonState == '1') {
		playerState = false;
	} else if (playerState == false) {
		playerState = true;
		scramblerLoop();
	}
}

// Helper functions for forcing all letters in <span> tags and saving caret position
function wrapLetters(textContent) {
	return textContent.split('').map(function(letter) {
		return '<span>' + letter + '</span>';
	}).join('');
}
function saveCaretPosition(context) {
	let selection = window.getSelection();
	let range = selection.getRangeAt(0);
	range.setStart(context, 0);
	let len = range.toString().length;

	return function restore() {
		let pos = getTextNodeAtPosition(context, len);
		selection.removeAllRanges();
		let range = new Range();
		range.setStart(pos.node, pos.position);
		selection.addRange(range);
	}
}
function getTextNodeAtPosition(root, index) {
	let lastNode = null;
	let treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, function next(elem) {
		if (index > elem.textContent.length) {
		index -= elem.textContent.length;
		lastNode = elem;
		return NodeFilter.FILTER_REJECT
		}
		return NodeFilter.FILTER_ACCEPT;
	});
	var c = treeWalker.nextNode();
	return {
		node: c ? c : root,
		position: c ? index : 0
	};
}
let scramblerDisplay = document.querySelector("#scrambler .scrambler-display");
scramblerDisplay.addEventListener('input', function(e) {
	let restoreCaret = saveCaretPosition(this);
	scramblerDisplay.innerHTML = wrapLetters(scramblerDisplay.innerText);
	restoreCaret();
});
  
// Main loop
function scramblerLoop() {
	let noteReference = (100/scramblerSpeed);
	let scramblerDOM = document.querySelector("#scrambler");
	let scramblerLetters = scramblerDOM.querySelectorAll(".scrambler-display span");
	if (scramblerLetters.length != 0) {
		let scrambleSize = scramblerLetters.length*scramblerQuantity;
		// Sounds
		for (let i=0; i<scramblerQuantity*4; i++) {
			if (scramblerSound == 0) { // Percussion
				setTimeout(() => {
					playPercussion("random");
				}, i*40);
			} else if (scramblerSound == 1) { // Toms
				setTimeout(() => {
					playTom(Math.random()*(noteReference*200) + noteReference*500);
				}, i*80);
			} else if (scramblerSound == 2) { // Piano
				let scramblerPianoSelection = scramblerPiano[0];
				if (scramblerSpeed == 500) {
					scramblerPianoSelection = scramblerPiano[1];
				} else if (scramblerSpeed == 700) {
					scramblerPianoSelection = scramblerPiano[2];
				}
				setTimeout(() => {
					playPiano(scramblerPianoSelection[Math.floor(Math.random()*scramblerPianoSelection.length)]);
				}, i*80);
			} else if (scramblerSound == 3) { // Voice
				let scramblerVoiceSelection = scramblerVoice[0];
				if (scramblerSpeed == 500) {
					scramblerVoiceSelection = scramblerVoice[1];
				} else if (scramblerSpeed == 700) {
					scramblerVoiceSelection = scramblerVoice[2];
				}
				setTimeout(() => {
					playVoice(voiceSamplerLetters[Math.floor(Math.random()*voiceSamplerLetters.length)], scramblerVoiceSelection, 80);
				}, i*80);
			}
		}
		// Change font variation properties
		for (let i=0; i<scrambleSize; i++) {
			let activeLetter = scramblerLetters[Math.floor(Math.random()*scramblerLetters.length)];
			let temp = "";
			for (let j=0; j<axesInfo.length; j++) {
				let axis = axesInfo[j].name;
				let axisRandom = (axesInfo[j].max-axesInfo[j].min)*Math.random() + axesInfo[j].min;
				temp += `"${axis}" ${axisRandom}` ;
				if (j<axesInfo.length-1) {
					temp += ", ";
				}
			}
			activeLetter.style.fontVariationSettings = temp;
		}
	} 
	setTimeout(() => {
		if (playerState == false) {
			return
		}
		scramblerLoop();
	}, scramblerSpeed);
}



// —————————————————————————————————————————————————————————————————————
// ANALYZER
// —————————————————————————————————————————————————————————————————————

// Set active letter
let activeLetter = "a";
function analyzerLetterSet(e) {
	let analyzerDisplay = document.querySelector("#analyzer .instrument-display-text");
	let letter = e.dataset.analyzerLetter;
	activeLetter = letter;
	analyzerDisplay.innerText = letter;
	playVoice(letter, ['C3','D3','E3'], 100);
}

// Key press to activate letter
window.addEventListener('keydown', function (e) {
	if (activeInstrument == "analyzer") {
		let letter = e.key.toUpperCase();
		if (voiceSamplerLetters.includes(letter.toLowerCase())) {
			let analyzerLetter = document.querySelector(`[data-analyzer-letter="${letter}"]`);
			instrumentButtonGroupPress(analyzerLetter, 'analyzer-alphabet');
			analyzerLetterSet(analyzerLetter);
		}
	}
});

// Set variable axes on slider change
let analyzerSlider;
let analyzerAxis = 0;
function analyzerSliderStart(slider) {
	analyzerSlider = slider;
	analyzerAxis = analyzerSlider.dataset.analyzerAxis;
	document.addEventListener('mousemove', analyzerSliderSet);
	document.addEventListener('mouseup', analyzerSliderStop);
}
function analyzerSliderSet() {
	let axisValue = analyzerSlider.dataset.sliderValue/100;
	document.querySelector(':root').style.setProperty(`--axis${analyzerAxis}-percent`, `${axisValue}`);
}
function analyzerSliderStop() {
	document.removeEventListener('mousemove', analyzerSliderSet);
	document.removeEventListener('mouseup', analyzerSliderStop);
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

// Mono synth
let monoSynth = new Tone.MonoSynth();
monoSynth.set({
	oscillator: {
		type: "sawtooth8"
	},
	envelope: {
		attack: 0.01,
		decay: 0.01,
		sustain: 1,
		release: 0.05
	},
	portamento: 0.01,
	volume: -10
}).toDestination();
function playMono(freq) {
	monoSynth.triggerAttackRelease(freq, .1);
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




// const volumeMeterEl = document.getElementById('volumeMeter');
// const startButtonEl = document.getElementById('startButton');
// startButtonEl.onclick = async () => {
// 	startButtonEl.disabled = true;
// 	const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
// 	const audioContext = new AudioContext();
// 	const mediaStreamAudioSourceNode = audioContext.createMediaStreamSource(stream);
// 	const analyserNode = audioContext.createAnalyser();
// 	mediaStreamAudioSourceNode.connect(analyserNode);

// 	const pcmData = new Float32Array(analyserNode.fftSize);
// 	const onFrame = () => {
// 		analyserNode.getFloatTimeDomainData(pcmData);
// 		let sumSquares = 0.0;
// 		for (const amplitude of pcmData) { sumSquares += amplitude*amplitude; }
// 		volumeMeterEl.value = Math.sqrt(sumSquares / pcmData.length);
// 		window.requestAnimationFrame(onFrame);
// 	};
// 	window.requestAnimationFrame(onFrame);
// };
