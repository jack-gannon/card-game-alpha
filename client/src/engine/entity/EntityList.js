import { PlayerAttributes } from "./Player/PlayerAttributes";
import { ItemList } from "./Item/ItemList";

export const EntityList = {
  player: { ...PlayerAttributes },
  item: { ...ItemList },
};
