import React from "react";
import { ThemeProvider } from "@emotion/react";

import RootLayout from "./RouterLayout";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%" }}>
        <RootLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
