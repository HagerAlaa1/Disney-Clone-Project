import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import "./utils/i18n/I18N.ts"
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      {/* <Suspense fallback = {<div>Loading...</div>}> */}
      <App />
      {/* </Suspense> */}
    </StrictMode>
  </BrowserRouter>
);
