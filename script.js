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

// TODO use event bubbling to add a new background color to e.target using this as the callback
function colorPixel(color) {}

// should work like this to begin with, but use a named func in callback
sketchContainer.addEventListener("click", function (e) {
  console.log(`clicked on: `, e.target.classList);
  e.target.style.backgroundColor = "black";
});
