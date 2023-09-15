import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Containers/HomePage.jsx";
import Profile from "./Containers/Profile.jsx";
import ActiveRequest from "./Containers/ActiveRequest";
import { useState } from "react";
import AppBar from "./Components/AppBar";
import DrawerComponent from "./Components/Drawer.jsx";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [openDrawer, setDrawer] = useState(false);
  const isLogin = true;
  return (
    <>
      <div style={{ position: "sticky", top: 0 }}>
        <AppBar onClick={() => setDrawer(!openDrawer)} />
      </div>
      <DrawerComponent open={openDrawer} onClose={() => setDrawer(false)} />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/active" element={<ActiveRequest />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default PrivateRoute;
