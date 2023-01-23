"use strict";

class EtchASketch {
  constructor(size) {
    this.size = size;
  }

  //   create a grid of divs
  makeCanvas() {
    const size = this.size;
    let div = `<div class="pixel"></div>`;
    const row = div.repeat(size);
    const rows = [];
    for (let i = 0; i < size; i++) {
      rows.push(`<div class="row">${row}</div>`);
    }
    return rows.join().replaceAll(",", "");
  }
}

const sketchContainer = document.querySelector(".sketch-container");
const sketch = new EtchASketch(16);
sketchContainer.insertAdjacentHTML("afterbegin", sketch.makeCanvas());

const rows = document.querySelectorAll(".row");
const pixels = document.querySelectorAll(".pixel");

// GLOBAL VARIABLES
let currentColor = "black";
let currentMode = "color";

// setting the modes (color,eraser,rainbow,etc.)
const modeToggles = document.querySelectorAll(".mode");

function setMode(mode) {
  currentMode = mode;
}
modeToggles.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const mode = e.target.id;
    setMode(mode);
    modeToggles.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.toggle("active");
  })
);

function randomColor() {
  const r = Math.floor(Math.random() * 255).toString();
  const g = Math.floor(Math.random() * 255).toString();
  const b = Math.floor(Math.random() * 255).toString();
  return `rgb(${r}, ${g}, ${b})`;
}

function setPixelToCurrentColor(e) {
  if (currentMode === "eraser") {
    currentColor = "white";
  } else if (currentMode === "rainbow") {
    currentColor = randomColor();
  }
  e.target.style.backgroundColor = currentColor;
}

// TODO implement click/drag instead of mouseover. yeah i know mouseover technically fulfills the Odin requiremnts but click/drag is much better UX
sketchContainer.addEventListener("mouseover", setPixelToCurrentColor);
