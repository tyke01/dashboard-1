import { registerLicense } from "@syncfusion/ej2-base";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

// Registering Syncfusion license key
registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUX1XcHVWRmNcUURzWA==");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>,
  </React.StrictMode>
);
