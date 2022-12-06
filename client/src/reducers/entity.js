import { REGISTER_ENTITY } from "../actions/types";

let initialState = {
  entities: {},
};

export default function entityReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ENTITY:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.currentTile]: action.payload,
        },
      };
    default:
      return state;
  }
}
