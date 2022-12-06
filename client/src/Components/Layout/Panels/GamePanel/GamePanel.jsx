import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMoveType } from "../../../../actions/game";
import "./GamePanel.scss";

const GamePanel = () => {
  const dispatch = useDispatch();
  const playerTurn = useSelector((state) => state.game.turn);
  const moveType = useSelector((state) => state.game.moveType);

  const handleSetMoveType = (moveType) => {
    dispatch(setMoveType(moveType));
  };

  return (
    <div className="game-panel">
      <div>
        <p>Game Panel</p>
        <p>Player turn:</p>
        <p>{playerTurn ? "true" : "false"}</p>
        <p>Move type:</p>
        <p>{moveType ? moveType : "Select an option"}</p>
      </div>
      <div className="game-panel__controls">
        <button
          onClick={() => {
            handleSetMoveType("movement");
          }}
        >
          Move
        </button>
        <button
          onClick={() => {
            handleSetMoveType("wait");
          }}
        >
          Wait
        </button>
        <button>Combat</button>
      </div>
    </div>
  );
};

export default GamePanel;
