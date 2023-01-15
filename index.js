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
    [null,null,null,null,null,roadTransferLeftDown,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadTransferRightDown,null,null,null,null,null,null,null],
    [null,null,null,null,null,roadVertical,null,null,null,null,null,null,roadVertical,null,null,null,null,null,null,null],
    [null,null,null,null,null,roadVertical,null,null,null,null,null,null,roadVertical,null,null,null,null,null,null,null],
    [null,null,roadEdgeLeft,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontalDown,roadHorizontal,roadHorizontal,roadTransferRightDown,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,roadVertical,null,null,roadVertical,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,roadVertical,null,null,roadVertical,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,roadVertical,null,null,roadVertical,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,roadTransferLeftUp,roadHorizontal,roadHorizontal,roadTransferRightDown,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],

  ]
  let gameTiles = [[]];
  gameCanvas = createCanvas(WIDTH, HEIGHT);
  gameCanvas.parent('canvas-container');
  background(25, 25, 25);
  //   noStroke();
  // let button = createImage(100,100);
  // button.position(300,300);
  // button.mousePressed(TestClicked)
  drawMap(mapTiles);
  drawGame(gameTiles);
}
function draw() {}

function windowResized() {
  resizeCanvas(windowWidth - (20 / 100) * windowWidth, windowHeight);
}
