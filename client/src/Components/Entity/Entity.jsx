import React from "react";
import Item from "../Entity/Types/Item/Item";
import Enemy from "../Entity/Types/Enemy/Enemy";
import NPC from "../Entity/Types/NPC/NPC";
import Player from "../Entity/Types/Player/Player";
import "./Entity.scss";

const Entity = ({ type, id }) => {
  return (
    <>
      {type === "item" ? (
        <Item id={id} />
      ) : type === "enemy" ? (
        <Enemy id={id} />
      ) : type === "npc" ? (
        <NPC id={id} />
      ) : type === "player" ? (
        <Player />
      ) : null}
    </>
  );
};

export default Entity;
