import React from "react";
import { ItemList } from "../../../../engine/entity/Item/ItemList";
const Item = ({ id }) => {
  let details = ItemList[id];

  const handleClick = () => {
    details.onClick();
  };

  return (
    <div onClick={() => handleClick()}>
      <img src={details.gridAsset} alt={details.name} />
    </div>
  );
};

export default Item;
