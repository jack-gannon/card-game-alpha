import { SET_PLAYER_TURN, SET_MOVE_TYPE } from "../actions/types";

let initialState = {
  mode: "crawl",
  turn: "player",
  moveType: null,
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_TURN:
      return {
        ...state,
        turn: action.payload,
      };
    case SET_MOVE_TYPE:
      return {
        ...state,
        moveType: action.payload,
      };
    default:
      return state;
  }
}
