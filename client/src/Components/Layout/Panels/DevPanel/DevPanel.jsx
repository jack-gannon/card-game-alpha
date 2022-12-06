import React, { useEffect } from "react";
import "./DevPanel.scss";
import { useSelector, useDispatch } from "react-redux";
import { setAdjacentTiles } from "../../../../actions/grid";

const DevPanel = () => {
  const dispatch = useDispatch();
  const selectedTile = useSelector((state) => state.grid.selectedTile);
  const hoverTile = useSelector((state) => state.grid.hoverTile);
  const adjacentTiles = useSelector((state) => state.grid.adjacentTiles);
  console.log(hoverTile);
  const tileDistance = useSelector((state) => state.grid.tileDistance);

  useEffect(() => {
    dispatch(setAdjacentTiles(hoverTile, 4, 32, 32));
  }, [hoverTile]);

  return (
    <div className="dev-panel">
      <p>Dev Panel</p>
      <p className="dev-panel__label">Selected Tile:</p>
      <p className="dev-panel__label">
        {selectedTile === null ? "null" : selectedTile}
      </p>
      <p className="dev-panel__label">Hover Tile:</p>
      <p className="dev-panel__label">
        {hoverTile === null ? "null" : hoverTile}
      </p>
      <p className="dev-panel__label">Tile Distance:</p>
      <p className="dev-panel__label">
        {tileDistance === null ? "null" : tileDistance}
      </p>
      <AdjacentTiles adjacentTiles={adjacentTiles} />
    </div>
  );
};

const AdjacentTiles = ({ adjacentTiles }) => {
  return (
    <div className="dev-panel__adj-tiles">
      <p>Adjacent tiles:</p>
      <p>Up:</p>
      {adjacentTiles.up.length > 0 &&
        adjacentTiles.up.map((tile) => (
          <div className="dev-panel__value" key={tile}>
            {tile}
          </div>
        ))}
      <p>Right:</p>
      {adjacentTiles.right.length > 0 &&
        adjacentTiles.right.map((tile) => (
          <div className="dev-panel__value" key={tile}>
            {tile}
          </div>
        ))}
      <p>Down:</p>
      {adjacentTiles.down.length > 0 &&
        adjacentTiles.down.map((tile) => (
          <div className="dev-panel__value" key={tile}>
            {tile}
          </div>
        ))}
      <p>Left:</p>
      {adjacentTiles.left.length > 0 &&
        adjacentTiles.left.map((tile) => (
          <div className="dev-panel__value" key={tile}>
            {tile}
          </div>
        ))}
    </div>
  );
};

export default DevPanel;
