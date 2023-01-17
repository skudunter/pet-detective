let car;
function preload() {
  roadHorizontal = loadImage('./assets/road-horizontal.png');
  roadVertical = loadImage('./assets/road-vertical.png');
  roadEdgeDown = loadImage('./assets/road-edge-down.png');
  roadEdgeUp = loadImage('./assets/road-edge-up.png');
  roadEdgeRight = loadImage('./assets/road-edge-right.png');
  roadEdgeLeft = loadImage('./assets/road-edge-left.png');
  roadTransferLeftUp = loadImage('./assets/road-transfer-left-up.png');
  roadTransferLeftDown = loadImage('./assets/road-transfer-left-down.png');
  roadTransferRightDown = loadImage("./assets/road-transfer-right-down.png");
  roadTransferRightUp = loadImage("./assets/road-transfer-right-up.png");
  roadHorizontalDown = loadImage("./assets/road-horizontal-down.jpg");
}
function setup() {
  let mapTiles = [
    // 2d array of image data
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,roadTransferLeftDown,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadTransferRightDown,null,null,null,null,null,null,null],
    [null,null,null,roadVertical,null,null,null,null,null,null,roadVertical,null,null,null,null,null,null,null],
    [null,null,null,roadVertical,null,null,null,null,null,null,roadVertical,null,null,null,null,null,null,null],
    [roadEdgeLeft,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontalDown,roadHorizontal,roadHorizontal,roadTransferRightDown,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,roadVertical,null,null,roadVertical,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,roadVertical,null,null,roadVertical,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,roadVertical,null,null,roadVertical,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,roadTransferLeftUp,roadHorizontal,roadHorizontal,roadTransferRightUp,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],

  ]
  gameCanvas = createCanvas(WIDTH, HEIGHT);
  gameCanvas.parent('canvas-container');
  background(25, 25, 25);
  drawMap(mapTiles);
 car = new Car(10,8,10);
}
function draw() {
  car.render();
}

// function windowResized() {
//   resizeCanvas(windowWidth - (20 / 100) * windowWidth, windowHeight);
// }
