import {
  SET_SELECTED_TILE,
  SET_HOVER_TILE,
  SET_ADJACENT_TILES,
  SET_TILE_DISTANCE,
  INITIALIZE_GRID_REFERENCE,
  REGISTER_TILE_REF,
} from "../actions/types";

let initialState = {
  hoverTile: "0-0-0",
  selectedTile: "0-0-0",
  tileDistance: 0,
  adjacentTiles: {
    up: [],
    right: [],
    down: [],
    left: [],
  },
  gridReference: {
    columnCount: 0,
    rowCount: 0,
    zIndex: 0,
    tiles: {},
  },
};

export default function gridReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_TILE:
      return { ...state, selectedTile: action.payload };
    case SET_HOVER_TILE:
      return { ...state, hoverTile: action.payload };
    case SET_ADJACENT_TILES:
      return { ...state, adjacentTiles: action.payload };
    case SET_TILE_DISTANCE:
      return { ...state, tileDistance: action.payload };
    case INITIALIZE_GRID_REFERENCE: {
      return { ...state, gridReference: action.payload };
    }
    case REGISTER_TILE_REF: {
      return {
        ...state,
        gridReference: {
          ...state.gridReference,
          tiles: {
            ...state.gridReference.tiles,
            [action.payload.id]: action.payload,
          },
        },
      };
    }
    default:
      return state;
  }
}
