import React from "react";
import ReactDOM from "react-dom/client";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { getLibrary } from "Utils";
import "./index.css";
import { store, persister } from "Redux";
import ThemeCustomization from "Theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <BrowserRouter>
          <ThemeCustomization>
            <Web3ReactProvider getLibrary={getLibrary}>
              <App />
            </Web3ReactProvider>
          </ThemeCustomization>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
