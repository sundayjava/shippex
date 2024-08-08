import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PullToRefresh from "./components/pull-to-t-refresh/PullToRefresh.tsx";
import { SnackbarProvider } from "./contexts/SnackbarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PullToRefresh>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </PullToRefresh>
    </BrowserRouter>
  </React.StrictMode>
);
