class Grid {
  constructor(mapTiles = [], gameTiles = []) {
    // 'tiles' will be an array of array of booleans, the value being whether the current tile is a road tile.
    // boolean[][]
    // each inner array must be the same length or else an InvalidTileError will throw.
    this.mapTiles = mapTiles;
    this.gameTiles = gameTiles;
    //gameTiles can contain a car, pet, house or nothing at all on a particular tile.
  }
  //renders the grid and tiles onto the canvas
  renderMap() {
    try {
      let tileWidth = TILEWIDTH;
      let tileHeight = TILEHEIGHT;
      //   console.log(this.mapTiles)
      for (let row = 0; row < this.mapTiles.length; row++) {
        for (let col = 0; col < this.mapTiles[row].length; col++) {
          if (this.mapTiles[row][col]) rect(col * tileWidth, row * tileHeight, tileWidth, tileHeight);
        }
      }
    } catch (error) {
      console.log("Failed: " + error);
    }
  }
  //renders the peices into their correct positions on the board
  renderGame() {
    for (let row = 0; row < this.gameTiles.length; row++) {
      for (let col = 0; col < this.gameTiles[row].length; col++) {
        let tileValue = this.gameTiles[row][col];// undefined or Object
        if (tileValue == undefined) continue;
        // switch(tileValue.type) {
        //     case 'car': {
        //         //paint image
        //         break;
        //     };
        //     case 'house': {
        //         //paint
        //         break;
        //     };
        //     case 'pet': {
        //         //paint
        //         break;
        //     }
        // }
        tileValue.render();
      }
    }
  }
  updateMapTiles(mapTiles) {
    this.mapTiles = mapTiles;
  }
  updateGameTiles(gameTiles) {
    this.gameTiles = gameTiles;
  }
}
