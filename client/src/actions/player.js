import { START_PLAYER, MOVE_PLAYER, REGISTER_ENTITY } from "./types";

export const startPlayer = (startCoords) => (dispatch) => {
  dispatch({
    type: REGISTER_ENTITY,
    payload: {
      currentTile: startCoords,
      entityId: "player",
      type: "player",
    },
  });
  dispatch({ type: START_PLAYER, payload: startCoords });
};

export const movePlayer = (newCoords) => (dispatch) => {
  dispatch({ type: MOVE_PLAYER, payload: newCoords });
};
