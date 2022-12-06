import ItemIcon from "../../../img/game_item.svg";

export const ItemList = {
  IT3424: {
    name: "Trophy",
    type: "trophy",
    gridAsset: ItemIcon,
    onClick() {
      console.log(this.name);
    },
  },
};
