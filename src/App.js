import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RouterLayout";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <RootLayout />
    </div>
  );
}

export default App;
