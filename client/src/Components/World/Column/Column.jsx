import React from "react";
import Tile from "../Tile/Tile";
import Entity from "../../Entity/Entity";
import { useDispatch, useSelector } from "react-redux";
import {
  setHoverTile,
  setTileDistance,
  setSelectedTile,
} from "../../../actions/grid";
import "./Column.scss";

const Column = ({ xIndex, rowCount, zIndex }) => {
  const dispatch = useDispatch();
  const selectedTile = useSelector((state) => state.grid.selectedTile);

  const hoverEvent = (x, y, z) => {
    dispatch(setTileDistance(selectedTile, `${x}-${y}-${z}`));
    dispatch(setHoverTile(`${x}-${y}-${z}`));
  };

  const onTileRender = (x, y, z) => {
    console.log(`${x}-${y}-${z} has rendered`);
  };

  const onTileClick = (x, y, z) => {
    dispatch(setSelectedTile(`${x}-${y}-${z}`));
  };

  // Renders Tile components
  const renderTiles = (rowQty, Component) => {
    let tiles = [];
    for (let yIndex = 0; yIndex <= rowQty; yIndex++) {
      tiles.push(
        <Tile
          x={xIndex}
          y={yIndex}
          z={zIndex}
          onTileRender={() => onTileRender(xIndex, yIndex, zIndex)}
          onHover={() => hoverEvent(xIndex, yIndex, zIndex)}
          onClick={() => onTileClick(xIndex, yIndex, zIndex)}
          render={(x, y, z, isHovered, isRendered) => {
            return (
              <Component
                x={x}
                y={y}
                z={z}
                isHovered={isHovered}
                isRendered={isRendered}
              />
            );
          }}
        ></Tile>
      );
    }
    return tiles;
  };
  return (
    <div className="column">
      {renderTiles(rowCount, Entity).map((tile) => tile)}
    </div>
  );
};

export default Column;
