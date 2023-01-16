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
