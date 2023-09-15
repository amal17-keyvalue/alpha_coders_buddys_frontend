import React from "react";
import { ThemeProvider } from "@emotion/react";

import RootLayout from "./RouterLayout";
import { ToastContainer, toast } from "react-toastify";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%" }}>
        <RootLayout />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          type="success"
        />
      </div>{" "}
    </ThemeProvider>
  );
}

export default App;
