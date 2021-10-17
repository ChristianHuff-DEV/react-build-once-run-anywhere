import { useContext } from "react";
import "./App.css";
import ConfigContext from "./context/ConfigContext";

function App() {
	// Access the config
  const config = useContext(ConfigContext);

  return (
    <div className="App">
      <header className="App-header">
				{/* Get the value for "ENVIRONMENT" from the config */}
        <p>{config.ENVIRONMENT}</p>
      </header>
    </div>
  );
}

export default App;
