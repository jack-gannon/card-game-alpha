import "./App.css";
import { useState } from "react";
import World from "./Components/World/World";
import Panel from "./Components/Layout/Panels/Panel";

function App() {
  const [activeTile, setActiveTile] = useState(null);

  return (
    <div className="App">
      <Panel activeTile={activeTile} />
      <World setActiveTile={setActiveTile} />
    </div>
  );
}

export default App;
