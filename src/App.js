import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RouterLayout";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
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
    </div>
  );
}

export default App;
