import React from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Containers/HomePage.jsx";
import Profile from "./Containers/Profile.jsx";
import ActiveRequest from "./Containers/ActiveRequest";
import { useState } from "react";
import AppBar from "./Components/AppBar";
import DrawerComponent from "./Components/Drawer.jsx";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const [openDrawer, setDrawer] = useState(false);
  const isLogined = localStorage.getItem("id");
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <AppBar onClick={() => setDrawer(!openDrawer)} />
      </div>
      <DrawerComponent open={openDrawer} onClose={() => setDrawer(false)} />
      {isLogined ? (
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/active" element={<ActiveRequest />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default PrivateRoute;
