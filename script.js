// Colores oficiales base (puedes cambiarlos si tu profe usa otros)
const OFFICIAL = {
  greenG: 122, // rgb(0, 122, 0)
  redR: 178,   // rgb(178, 0, 0)
};

function toHex2(n) {
  const clamped = Math.max(0, Math.min(255, Number(n) || 0));
  return clamped.toString(16).padStart(2, "0").toUpperCase();
}

function rgbToHex(r, g, b) {
  return `#${toHex2(r)}${toHex2(g)}${toHex2(b)}`;
}

function setStripeColor(stripeEl, r, g, b) {
  stripeEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Elements
const greenRange = document.getElementById("greenRange");
const redRange = document.getElementById("redRange");

const stripeGreen = document.getElementById("stripeGreen");
const stripeRed = document.getElementById("stripeRed");

const greenHexLabel = document.getElementById("greenHex");
const redHexLabel = document.getElementById("redHex");

const greenValue = document.getElementById("greenValue");
const redValue = document.getElementById("redValue");

const btnReset = document.getElementById("btnReset");
const btnRandom = document.getElementById("btnRandom");

// Update
function updateGreen() {
  const g = Number(greenRange.value);
  const r = 0;
  const b = 0;

  setStripeColor(stripeGreen, r, g, b);

  const hex = rgbToHex(r, g, b);
  greenHexLabel.textContent = hex;
  greenValue.textContent = g;
}

function updateRed() {
  const r = Number(redRange.value);
  const g = 0;
  const b = 0;

  setStripeColor(stripeRed, r, g, b);

  const hex = rgbToHex(r, g, b);
  redHexLabel.textContent = hex;
  redValue.textContent = r;
}

// Events
greenRange.addEventListener("input", updateGreen);
redRange.addEventListener("input", updateRed);

btnReset.addEventListener("click", () => {
  greenRange.value = OFFICIAL.greenG;
  redRange.value = OFFICIAL.redR;
  updateGreen();
  updateRed();
});

btnRandom.addEventListener("click", () => {
  greenRange.value = Math.floor(Math.random() * 256);
  redRange.value = Math.floor(Math.random() * 256);
  updateGreen();
  updateRed();
});

// Init
btnReset.click();
