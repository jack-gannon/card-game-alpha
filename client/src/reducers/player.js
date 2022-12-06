import { START_PLAYER, MOVE_PLAYER } from "../actions/types";

let initialState = {
  currentPosition: null,
  startingPosition: null,
  inventory: [],
};

export default function gridReducer(state = initialState, action) {
  switch (action.type) {
    case START_PLAYER:
      return {
        ...state,
        currentPosition: action.payload,
        startingPosition: action.payload,
      };
    case MOVE_PLAYER:
      return { ...state, currentPosition: action.payload };
    default:
      return state;
  }
}
