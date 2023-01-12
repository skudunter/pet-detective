class House {
    constructor(gridX,gridY,houseID) {
        this.gridX = gridX;
        this.gridY = gridY;
        this.type = 'house';
        this.id = id;
        this.imageData = HOUSES[houseID];
    }
    render() {
        image(this.imageData,this.gridX * TILEWIDTH, this.gridY * TILEHEIGHT);
      }
}
//todo: paralelle arrays