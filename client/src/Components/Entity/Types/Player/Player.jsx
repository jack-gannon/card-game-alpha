import React from "react";
import { EntityList } from "../../../../engine/entity/EntityList";
import "./Player.scss";

const Player = () => {
  const details = EntityList.player;
  return (
    <div>
      <img src={details.gridAsset} alt="player icon" />
    </div>
  );
};

export default Player;
