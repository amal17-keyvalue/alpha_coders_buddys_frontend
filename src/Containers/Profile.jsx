import { Divider } from "@mui/material";
import Avatar from "../avatar.webp";

const ActiveRequest = () => {
  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <img src={Avatar} alt="" height="100px" width="100px" />
      </div>
      <Divider />
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 10,
        }}
      >
        Name
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 10,
        }}
      >
        Address
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 10,
        }}
      >
        City
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 10,
        }}
      >
        Phone
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Email
      </div>
      <Divider />
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 10,
        }}
      >
        time slot
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 10,
        }}
      >
        turn of active mode: switch needed
      </div>
    </div>
  );
};

export default ActiveRequest;
