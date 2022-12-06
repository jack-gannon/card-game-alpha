import React from "react";
import Column from "../Column/Column";
import "./Grid.scss";

const Grid = ({ zIndex, columnCount, rowCount }) => {
  // Generates column components
  const renderColumns = (colCount) => {
    let columns = [];
    for (let i = 0; i <= colCount; i++) {
      console.log("Rendering Column");
      columns.push(<Column xIndex={i} rowCount={rowCount} zIndex={zIndex} />);
    }
    return columns;
  };

  return (
    <div className="grid" id="grid">
      {renderColumns(columnCount).map((column) => column)}
    </div>
  );
};

export default Grid;
