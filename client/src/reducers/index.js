import { combineReducers } from "redux";
import gridReducer from "./grid";
import entityReducer from "./entity";
import playerReducer from "./player";
import gameReducer from "./game";

export const rootReducer = combineReducers({
  grid: gridReducer,
  entity: entityReducer,
  player: playerReducer,
  game: gameReducer,
});
