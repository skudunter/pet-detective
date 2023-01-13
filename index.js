
function preload() {
  roadHorizontal = loadImage("./assets/road-horizontal.png");
  roadVertical =loadImage('./assets/road-vertical.png')
  roadEdgeDown = loadImage("./assets/road-edge-down.png");
  roadEdgeUp = loadImage("./assets/road-edge-up.png");
  roadEdgeRight = loadImage("./assets/road-edge-right.png");
  roadEdgeLeft = loadImage("./assets/road-edge-left.png");
}
function setup() {
  let tiles = [
    // 2d array of image data
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,roadEdgeUp,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadEdgeRight,null,null,null,null,null],
    [null,null,null,null,null,roadVertical,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,roadVertical,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,roadVertical,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,roadVertical,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,roadEdgeLeft,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadHorizontal,roadEdgeRight,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  ];
  gameCanvas = createCanvas(WIDTH, HEIGHT);
  gameCanvas.parent("canvas-container");
  background(25, 25, 25);
  //   noStroke();
  // let button = createImage(100,100);
  // button.position(300,300);
  // button.mousePressed(TestClicked)
  drawMap(tiles);
}
function draw() {}
function TestClicked() {
  alert("this is a test");
}
