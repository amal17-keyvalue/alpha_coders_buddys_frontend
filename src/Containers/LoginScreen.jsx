import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { base_url } from "../constants";
import { useState } from "react";

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
      }}
    >
      <div style={{ marginTop: "200px" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={handleUsernameChange}
        />
        <TextField
          fullWidth
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ marginTop: 2 }}
          onChange={handlePasswordChange}
        />
        <Button
          sx={{ width: "100%", marginTop: 3, textTransform: "none" }}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        <div style={{ marginTop: 8, fontSize: 14, textAlign: "center" }}>
          New User?{" "}
          <span style={{ color: "skyblue" }} onClick={handleRegister}>
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
