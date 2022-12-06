const determineEndPoint = (
  activeTileCoord,
  direction,
  distance,
  gridBoundary
) => {
  let endPoint;
  if (direction === "left" || direction === "up") {
    endPoint = activeTileCoord - distance;
    if (endPoint <= gridBoundary) {
      endPoint = gridBoundary;
    }
  } else {
    endPoint = activeTileCoord + distance;
    if (gridBoundary <= endPoint) {
      endPoint = gridBoundary;
    }
  }
  return endPoint;
};

export const findAdjacentTiles = (
  activeTile,
  direction,
  distance,
  gridBoundary
) => {
  let adjacentTiles = [];
  let activeTileCoords = activeTile.split("-");
  let xValue = Number(activeTileCoords[0]);
  let yValue = Number(activeTileCoords[1]);
  let zValue = Number(activeTileCoords[2]);
  if (direction === "up") {
    for (
      let i = yValue - 1;
      determineEndPoint(yValue, "up", distance, gridBoundary) <= i;
      i--
    ) {
      adjacentTiles.push(`${xValue}-${i}-${zValue}`);
    }
  } else if (direction === "down") {
    for (
      let i = yValue + 1;
      i <= determineEndPoint(yValue, "down", distance, gridBoundary);
      i++
    ) {
      adjacentTiles.push(`${xValue}-${i}-${zValue}`);
    }
  } else if (direction === "right") {
    for (
      let i = xValue + 1;
      i <= determineEndPoint(xValue, "right", distance, gridBoundary);
      i++
    ) {
      adjacentTiles.push(`${i}-${yValue}-${zValue}`);
    }
  } else if (direction === "left") {
    for (
      let i = xValue - 1;
      determineEndPoint(xValue, "left", distance, gridBoundary) <= i;
      i--
    ) {
      adjacentTiles.push(`${i}-${yValue}-${zValue}`);
    }
  } else {
    console.log("Direction value incorrect or not specified");
  }
  return adjacentTiles;
};
