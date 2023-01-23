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
	logo.style.transform = "translateX(100vw) rotate(10deg)";
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

// Navigation and settings functions
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
		navIn();
		logoAnimation();
		colorCycle();
	}, 2000);
}, 50);

let currentMenu = "";
function menuIn(menuName) {
	colorCycleToggle = false;
	logoOut();
	navOut();
	currentMenu = "#"+menuName;
	let menuTarget = document.querySelector(currentMenu);
	menuTarget.style.transform = "translateX(0) rotate(0deg)";
	if (currentMenu == '#fontbox') {
		let fonts = menuTarget.querySelectorAll('li');
		for (let font of fonts) {
			font.style.transition = "0s";
			font.style.transform = `translate(${Math.random()*-500}px, ${Math.random()*-1000+500}px) rotate(${Math.random()*20-10}deg)`;
		}
		setTimeout(() => {
			for (let font of fonts) {
				font.style.transition = "background-color .2s, color .2s, fill .2s, transform 1s";
				font.style.transform = `translate(0, 0) rotate(${Math.random()*20-10}deg)`;
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
	navIn();
}

// Select font from menu
function pickFont(selectedFont) {
	document.querySelector(':root').style.setProperty("--activefont", `${selectedFont}`);
	getAxisInfo(selectedFont, `fonts/${selectedFont}.ttf`);
	menuOut();
}

// Read user-inputted font
document.getElementById('fontbox-menu-item-custom').addEventListener('click', openDialog);
function openDialog() {
	// Make styled button open correct dialogue
	document.getElementById('fontbox-menu-item-custom-input').click();
}
var newStyle = document.createElement('style');
if (window.FileList && window.File && window.FileReader) {
	document.getElementById('fontbox-menu-item-custom-input').addEventListener('change', event => {
		newStyle.remove();

		// Validate file type
		const file = event.target.files[0];
		let fileType = file.name.split('.').pop().toLowerCase();
		if (fileType != 'ttf' && fileType != 'otf' && fileType != 'woff' && fileType != 'woff2') {
			window.alert('That’s not a valid font file! Try a .ttf, .otf, .woff, or .woff2 file.');
			document.getElementById('fontbox-menu-item-custom-input').value = null;
			return;
		}
		let userFont = URL.createObjectURL(file);
		
		// Add font to document by creating new font style
		newStyle.appendChild(document.createTextNode(`
		@font-face{font-family:user;src:url('${userFont}');}`));
		document.head.appendChild(newStyle);
		document.querySelector(':root').style.setProperty("--activefont", `user`);

		// Reset input in case same file is selected
		document.getElementById('fontbox-menu-item-custom-input').value = null;

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
		} else {
			console.log("No variable axes!");
		}
	}
}
  