import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const handleRegister = () => {
    navigate("/onboarding");
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
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ marginTop: 2 }}
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
