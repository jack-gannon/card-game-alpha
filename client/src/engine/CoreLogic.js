import { findAdjacentVerticalTiles } from "./time/utils/findAdjacentVerticalTiles";

export let CoreLogic = class {
  constructor(gridObject) {
    this.gridObject = gridObject;
    this.activeTile = null;
  }
  set activeTile(tileId) {
    this.activeTile = tileId;
  }
  adjacentTiles(direction, distance) {
    return findAdjacentVerticalTiles(this.activeTile, direction, distance);
  }

  // setActiveTile: (id) => {
  //   this.activeTile = id;
  // },
};
