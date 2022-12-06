import React, { useState } from "react";
import "./Panel.scss";
import DevPanel from "./DevPanel/DevPanel";
import GamePanel from "./GamePanel/GamePanel";

const Panel = ({ activeTile }) => {
  const [activePanel, setActivePanel] = useState("dev");
  return (
    <div className="panel">
      <div className="panel__contents">
        <PanelControls setActivePanel={setActivePanel} />
        {activePanel === "dev" ? (
          <DevPanel activeTile={activeTile} />
        ) : (
          <GamePanel />
        )}
      </div>
    </div>
  );
};

const PanelControls = ({ setActivePanel }) => {
  return (
    <div className="panel__controls">
      <button onClick={() => setActivePanel("dev")}>Dev</button>
      <button onClick={() => setActivePanel("game")}>Game</button>
    </div>
  );
};

export default Panel;
