import React, { useState, useEffect } from "react";
import Entity from "../../Entity/Entity";
import { useSelector } from "react-redux";
import "./Tile.scss";

const Tile = (props) => {
  const [isHovered, setHovered] = useState(false);
  const [isRendered, setRendered] = useState(false);
  const { x, y, z, onHover, onTileRender } = props;
  const entities = useSelector((state) => state.entity.entities);
  const entity = entities[`${x}-${y}-${z}`];

  const handleMouseOver = () => {
    onHover();
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    onTileRender();
    setRendered(true);
  }, []);

  return (
    <div
      className="tile"
      id={`${x}-${y}-${z}`}
      onMouseOver={() => handleMouseOver()}
      onMouseLeave={() => handleMouseLeave()}
      onMouseDown={() => props.onClick()}
    >
      <div className="tile__children">
        {props.render(x, y, z, isHovered)}
        {entity && <Entity type={entity.type} id={entity.entityId} />}
      </div>
    </div>
  );
};

export default Tile;
