class Car {
  constructor(gridX, gridY,gas) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.type = "car";
    this.gas = gas;
    this.img = loadImage("./assets/car.png");
  }
  render() {
    image(this.img,this.gridX * TILEWIDTH-10, this.gridY * TILEHEIGHT+6,TILEWIDTH*1.2,TILEHEIGHT*0.8);
  }
}
