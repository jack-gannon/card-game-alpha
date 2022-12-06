export const generateTilesObject = (columnCount, rowCount, zIndex) => {
  let tilesObject = {};
  for (let x = 0; x <= columnCount; x++) {
    for (let y = 0; y <= rowCount; y++) {
      tilesObject[`${x}-${y}-${zIndex}`] = {
        id: `${x}-${y}-${zIndex}`,
        x: x,
        y: y,
        z: zIndex,
        children: [],
      };
    }
  }
  return tilesObject;
};

export const generateGridObject = (gridConfig) => {
  let { columns, rows, zIndex } = gridConfig;
  let gridObject = {
    columns: columns,
    rows: rows,
    zIndex: zIndex,
    tiles: {},
  };
  return gridObject;
};
