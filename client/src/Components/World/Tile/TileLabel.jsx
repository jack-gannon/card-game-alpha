import React from "react";

const TileLabel = ({ x, y, z, isHovered }) => {
  return (
    <div className={`tile__label ${isHovered && "tile__label--hover"}`}>
      {/* {isHovered ? (
        <>
          <p>{x}</p>
          <p>{y}</p>
          <p>{z}</p>
        </>
      ) : (
        <p className="default">×</p>
      )} */}
      <p className="default">×</p>
    </div>
  );
};

export default TileLabel;
