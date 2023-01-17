class Car {
  constructor(gas) {
    this.gridX = 0;
    this.gridY = 0;
    this.type = 'car';
    this.gas = gas;
    this.x = this.gridX * TILEWIDTH - 10; //placeholder values
    this.y = this.gridY * TILEHEIGHT + 6; //placeholder values
    this.w = TILEWIDTH * 1.2; //placeholder values
    this.h = TILEHEIGHT * 0.8; //placeholder values
    this.img = carImg;
    this.button = createButton('click me');
    this.button.size(this.w,this.h);
    this.button.mousePressed(this.handleMouseClick);
  }
  update(x,y){
    this.gridX = x;
    this.gridY = y;
    this.x = this.gridX * TILEWIDTH; //placeholder values
    this.y = this.gridY * TILEHEIGHT + 6; //placeholder values
  }
  render() {
    image(this.img, this.x, this.y,this.w,this.h);
    this.button.position(this.x+(window.innerWidth-width)/2,this.y);//hard coded valuess
  }
  handleMouseClick(){
    console.log('Hello world');
  }
}
