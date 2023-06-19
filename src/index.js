import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { SummaryProvider } from "./context/SummaryContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <SummaryProvider>
        <App />
      </SummaryProvider>
    </BrowserRouter>
  </StrictMode>
);
