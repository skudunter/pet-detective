let grid = new Grid();
let tiles = [
  [false, false, true, false],
  [false, false, true, false],
  [false, false, true, false],
  [false, false, true, false],
  [false, true, false, true],
];

function setup() {
  gameCanvas = createCanvas(WIDTH, HEIGHT);
  gameCanvas.parent("canvas-container");
  background(25, 25, 25);
//   noStroke();
  grid.updateMapTiles(tiles);
}
function draw() {
  grid.renderMap();
}
