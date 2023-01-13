class Car {
  constructor(gridX, gridY,gas) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.type = "car";
    this.gas = gas;
  }
  render() {
    image(this.gridX * TILEWIDTH, this.gridY * TILEHEIGHT);
  }
}
