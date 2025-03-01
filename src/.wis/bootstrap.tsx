import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./Root";

// @ts-ignore
const rootEl = document.getElementById(process.env.MOUNT_ID);
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  );
}
