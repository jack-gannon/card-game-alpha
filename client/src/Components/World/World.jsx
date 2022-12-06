import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeGridReference } from "../../actions/grid";
import { gridConfig } from "../../engine/grid/gridConfig";
import { generateGridObject } from "../../engine/grid/utils/generateGridObject";
import { registerEntity } from "../../actions/entities";
import { startPlayer } from "../../actions/player";
import Grid from "./Grid/Grid";
import "./World.scss";

const World = ({ setActiveTile }) => {
  const dispatch = useDispatch();
  const gridReference = useSelector((state) => state.grid.gridReference);

  useEffect(() => {
    dispatch(initializeGridReference(generateGridObject(gridConfig)));
    dispatch(registerEntity("0-0-0", "IT3424", "item"));
    dispatch(startPlayer("0-4-0"));
  }, []);

  return (
    <div className="world">
      <Grid
        zIndex={gridReference.zIndex}
        columnCount={gridReference.columns}
        rowCount={gridReference.rows}
        setActiveTile={setActiveTile}
      />
    </div>
  );
};

export default World;
