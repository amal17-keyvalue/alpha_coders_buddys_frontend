import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { base_url } from "../constants";
import { useState } from "react";

import AppLogo from "../budyyapp.png";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    const res = await fetch(`${base_url}/buddy/login`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email: userName }),
    });
    if (res) {
      const x = await res.json();
      console.log(x);
      localStorage.setItem("id", x.id);
      navigate("/home");
    }
  };

  const handleRegister = () => {
    navigate("/onboarding");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${LoginBG})`,
        // height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img src={AppLogo} alt="logo" style={{ borderRadius: "40px" }} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={handleUsernameChange}
          size="small"
          InputProps={{ sx: { fontSize: "18px" } }}
          InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
        />
        <TextField
          fullWidth
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ marginTop: 2 }}
          InputProps={{ sx: { fontSize: "18px" } }}
          InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
          onChange={handlePasswordChange}
          size="small"
        />
        <Button
          sx={{ width: "100%", marginTop: 2, textTransform: "none" }}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        <div
          style={{
            marginTop: 10,
            fontSize: 14,
            textAlign: "center",
            color: "GrayText",
          }}
        >
          Haven't signed up ?{" "}
          <span
            style={{ color: "rgb(7,55,99)", opacity: "0.8" }}
            onClick={handleRegister}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
