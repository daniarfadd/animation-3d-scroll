import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

// theatre js set up
studio.extend(extension);
studio.initialize();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* suspense so we can load 3d models */}
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
);