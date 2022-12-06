import {
  SET_SELECTED_TILE,
  SET_HOVER_TILE,
  SET_ADJACENT_TILES,
  SET_TILE_DISTANCE,
  INITIALIZE_GRID_REFERENCE,
  REGISTER_TILE_REF,
  SET_TILE_CHILD,
} from "./types";
import { findAdjacentTiles } from "../engine/grid/utils/findAdjacentTiles";
import { calculateDistance } from "../engine/grid/utils/calculateDistance";

export const setSelectedTile = (tileId) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_TILE,
    payload: tileId,
  });
};

export const setHoverTile = (tileId) => (dispatch) => {
  dispatch({
    type: SET_HOVER_TILE,
    payload: tileId,
  });
};

export const setAdjacentTiles =
  (tileId, distance, columnCount, rowCount) => (dispatch) => {
    let adjacentTiles = {
      up: findAdjacentTiles(tileId, "up", distance, 0),
      right: findAdjacentTiles(tileId, "right", distance, columnCount),
      down: findAdjacentTiles(tileId, "down", distance, rowCount),
      left: findAdjacentTiles(tileId, "left", distance, 0),
    };
    dispatch({
      type: SET_ADJACENT_TILES,
      payload: adjacentTiles,
    });
  };

export const setTileDistance = (startPoint, endPoint) => (dispatch) => {
  let tileDistance = calculateDistance(startPoint, endPoint);
  dispatch({ type: SET_TILE_DISTANCE, payload: tileDistance });
};

export const initializeGridReference = (gridObject) => (dispatch) => {
  dispatch({
    type: INITIALIZE_GRID_REFERENCE,
    payload: gridObject,
  });
};

export const registerTileReference = (x, y, z) => (dispatch) => {
  let initialTileReference = {
    id: `${x}-${y}-${z}`,
    x: x,
    y: y,
    z: z,
    children: [],
  };
  dispatch({ type: REGISTER_TILE_REF, payload: initialTileReference });
};

export const setTileChild = (tileId, childComponent) => (dispatch) => {
  dispatch({
    type: SET_TILE_CHILD,
    payload: { id: tileId, child: childComponent },
  });
};
