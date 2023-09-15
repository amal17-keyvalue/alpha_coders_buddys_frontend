import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from "./Containers/LoginScreen";
import Onboarding from "./Containers/Onboarding";
import PrivateRoute from "./PrivateLayout";

const RootLayout = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Onboarding />} path="/onboarding" />
        <Route element={<LoginScreen />} path="/login" />
        <Route path="*" element={<PrivateRoute />} />
        <Route path="/" element={<PrivateRoute />} />
      </Routes>
    </Router>
  );
};

export default RootLayout;
