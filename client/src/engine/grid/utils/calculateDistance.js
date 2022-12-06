export const calculateDistance = (start, end) => {
  let totalSteps = 0;
  let xSteps = 0;
  let ySteps = 0;

  let startCoords = start.split("-");
  let startX = Number(startCoords[0]);
  let startY = Number(startCoords[1]);

  let endCoords = end.split("-");
  let endX = Number(endCoords[0]);
  let endY = Number(endCoords[1]);

  // Calculate X Steps
  if (startX < endX) {
    xSteps = endX - startX;
  } else {
    xSteps = startX - endX;
  }

  // Calculate Y Steps
  if (startY < endY) {
    ySteps = endY - startY;
  } else {
    ySteps = startY - endY;
  }

  // Compile & return total steps
  totalSteps = xSteps + ySteps;
  return totalSteps;
};
