import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";

const DrawerComponent = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    onClose();
  };

  const handlLogout = () => {
    navigate("/login");
    localStorage.removeItem("id");
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{ width: 200 }}
      PaperProps={{
        style: {
          width: 180,
          marginTop: 56,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "93vh",
        },
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          onClick={() => handleNavigate("/home")}
          style={{
            height: 40,
            padding: 4,
            display: "flex",
            color: "#374151",
            fontSize: "16px",
            borderBottom: "1px solid #e5e7eb",
            cursor: "pointer",
          }}
        >
          <div style={{ marginTop: 13, marginLeft: 10 }}>Home</div>
        </div>
        <div
          onClick={() => handleNavigate("/active")}
          style={{
            height: 40,
            padding: 4,
            display: "flex",
            color: "#374151",
            fontSize: "16px",
            borderBottom: "1px solid #e5e7eb",
            cursor: "pointer",
          }}
        >
          <div style={{ marginTop: 13, marginLeft: 10 }}>Scheduled Request</div>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}
      >
        <div
          onClick={() => handleNavigate("/profile")}
          style={{
            height: 40,
            padding: 4,
            display: "flex",
            color: "#374151",
            fontSize: "16px",
            borderBottom: "1px solid #e5e7eb",
            borderTop: "1px solid #e5e7eb",
            cursor: "pointer",
          }}
        >
          <div style={{ marginTop: 13, marginLeft: 10 }}>Profile</div>
        </div>
        <div
          onClick={() => handlLogout()}
          style={{
            height: 40,
            padding: 4,
            display: "flex",
            color: "#374151",
            fontSize: "16px",
            borderBottom: "1px solid #e5e7eb",
            borderTop: "1px solid #e5e7eb",
            cursor: "pointer",
          }}
        >
          <div style={{ marginTop: 13, marginLeft: 10 }}>Logout</div>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
