import { SET_MOVE_TYPE, SET_PLAYER_TURN } from "./types";

export const setMoveType = (moveType) => (dispatch) => {
  dispatch({ type: SET_MOVE_TYPE, payload: moveType });
};

export const setPlayerTurn = (playerTurn) => (dispatch) => {
  dispatch({ type: SET_PLAYER_TURN, payload: playerTurn });
};
