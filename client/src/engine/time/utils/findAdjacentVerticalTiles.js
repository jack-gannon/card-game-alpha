export const findAdjacentVerticalTiles = (tileId, direction, distance) => {
  let adjacentTiles = [];
  let coords = tileId.split("-");
  if (direction === "up") {
    for (let i = 0; i <= distance; i++) {
      let activeYValue = Number(coords[1]);
      let adjacentTileYValue = (activeYValue += 1);
      let adjacentTile = `${coords[0]}-${adjacentTileYValue}-${coords[2]}`;
      adjacentTiles.push(adjacentTile);
    }
  } else {
  }
  return adjacentTiles;
};
