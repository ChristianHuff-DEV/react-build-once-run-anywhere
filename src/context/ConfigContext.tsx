import React from "react";

/**
 * Defines the parameters available in the config
 */
export interface Config {
  ENVIRONMENT: string;
}

/**
 * Loads the config.json file and validates it.
 * The config.json file is expected to be available at the root url.
 *
 * @returns the config
 */
export const loadConfig = async () => {
  const response = await fetch("/config.json");

  const config: Config = await response.json();

  return config;
};

/**
 * Context to provide the config to the app with default values
 */
export const ConfigContext = React.createContext<Config>({
  ENVIRONMENT: "development",
});

interface ConfigContextProviderProps {
  children: JSX.Element;
  config: Config;
}

// Create the context provider which can be diretly used in the JSX
export const ConfigContextProvider = (props: ConfigContextProviderProps) => {
  return (
    <ConfigContext.Provider value={props.config}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContext;
