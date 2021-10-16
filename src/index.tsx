import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigContextProvider, loadConfig } from "./context/ConfigContext";

// Load the config
loadConfig()
  // If the config was loaded successfully the app is rendered
  .then((config) => {
    ReactDOM.render(
      <React.StrictMode>
        <ConfigContextProvider config={config}>
          <App />
        </ConfigContextProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  // If the config could not be loaded an error is shown
  .catch(() => {
    ReactDOM.render(
      <React.StrictMode>
        <p>Currently not available...</p>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
