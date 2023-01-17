function drawMap(mapTiles) {
  for (let x = 0; x < mapTiles.length; x++) {
    for (let y = 0; y < mapTiles[x].length; y++) {
      if (mapTiles[x][y] !== null) {
        // rect(y*TILEWIDTH,x*TILEHEIGHT,TILEWIDTH,TILEHEIGHT);
        image(
          mapTiles[x][y],
          y * TILEWIDTH,
          x * TILEHEIGHT,
          TILEWIDTH,
          TILEHEIGHT
        );
      }
    }
  }
}
function drawGame(gameTiles) {
  for (let x = 0; x < gameTiles.length; x++) {
    for (let y = 0; y < gameTiles[x].length; y++) {
      if (mapTiles[x][y] !== null) {
        mapTiles[x][y].render();
      }
    }
  }
}
