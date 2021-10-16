import { useContext } from "react";
import "./App.css";
import ConfigContext from "./context/ConfigContext";

function App() {
  const config = useContext(ConfigContext);

  return (
    <div className="App">
      <header className="App-header">
        <p>{config.ENVIRONMENT}</p>
      </header>
    </div>
  );
}

export default App;
