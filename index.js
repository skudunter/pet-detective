let gameTiles,
  mapTiles,
  cars,
  pets,
  test,
  carImg,
  levelData,
  level = './levels/level1.json';
function preload() {
  carImg = loadImage('./assets/car.png');
  roadHorizontal = loadImage('./assets/road-horizontal.png');
  roadVertical = loadImage('./assets/road-vertical.png');
  roadEdgeDown = loadImage('./assets/road-edge-down.png');
  roadEdgeUp = loadImage('./assets/road-edge-up.png');
  roadEdgeRight = loadImage('./assets/road-edge-right.png');
  roadEdgeLeft = loadImage('./assets/road-edge-left.png');
  roadTransferLeftUp = loadImage('./assets/road-transfer-left-up.png');
  roadTransferLeftDown = loadImage('./assets/road-transfer-left-down.png');
  roadTransferRightDown = loadImage('./assets/road-transfer-right-down.png');
  roadTransferRightUp = loadImage('./assets/road-transfer-right-up.png');
  roadHorizontalDown = loadImage('./assets/road-horizontal-down.jpg');
  houses = [
    loadImage('./assets/house-0.png'),
    loadImage('./assets/house-1.png'),
    loadImage('./assets/house-2.png'),
    loadImage('./assets/house-3.png'),
  ];
  pets = [
    loadImage('./assets/pets-0.png'),
    loadImage('./assets/pets-1.png'),
    loadImage('./assets/pets-2.png'),
    loadImage('./assets/pets-3.png'),
  ];
  levelData = loadJSON(level);
}
function setup() {
  gameCanvas = createCanvas(WIDTH, HEIGHT); //p5 canvas setup
  gameCanvas.parent('canvas-container');
  background(25, 25, 25);

  mapTiles = levelData.mapTiles;
  gameTiles = levelData.gameTiles;

  drawMap(mapTiles);
  drawGame(gameTiles);
}
function draw() {}

// function windowResized() {
//   resizeCanvas(windowWidth - (20 / 100) * windowWidth, windowHeight);
// }
