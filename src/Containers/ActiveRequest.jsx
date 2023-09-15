import { Box, Button, Divider } from "@mui/material";
import Avatar from "../avatar.webp";
import { useNavigate } from "react-router-dom";
import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "./style.css";
import { base_url } from "../constants";
import { toast } from "react-toastify";

const ActiveRequest = () => {
  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB1oqDTFzaS_yWVrE1HvCmevtbGcZlqJ88",
  });
  const [data, setData] = useState();
  const id = localStorage.getItem("id");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${base_url}/buddy/${id}/services`);
      const x = await res.json();
      setData(x[0]);
    }
    fetchData();
  }, []);

  const center = useMemo(
    () => ({
      lat: data?.pickup_latitude || 10.0064046,
      lng: data?.pickup_longitude || 76.3642557,
    }),
    []
  );

  const handleChangeStatus = async () => {
    const res = await fetch(`${base_url}/service/${data?.id}/request`, {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "ACCEPTED" }),
    });
    const x = await res.json();
    if (x) {
      toast("Successfully accepted");
      navigate("/home");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div style={{ padding: 20, display: "flex", flexDirection: "column" }}>
        <div className="App">
          {isLoaded && (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            >
              <MarkerF position={{ lat: 10.0064046, lng: 76.3642557 }} />
            </GoogleMap>
          )}
        </div>
        {/* <Divider sx={{ marginTop: 3 }} /> */}
        <div
          style={{
            width: "100%",
            fontSize: "15px",
            color: "#020617",
            marginTop: 10,
            fontWeight: 400,
            fontFamily: "fantasy",
          }}
        >
          Name
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#6b7280",
            marginTop: 1,
            marginBottom: 7,
            fontStyle: "italic",
          }}
        >
          {data?.service_name}
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            fontSize: "15px",
            color: "#020617",
            marginTop: 10,
            fontWeight: 400,
            fontFamily: "fantasy",
          }}
        >
          Created Date
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#6b7280",
            marginTop: 1,
            marginBottom: 7,
            fontStyle: "italic",
          }}
        >
          {new Date(data?.date_time_of_service).toLocaleString()}
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            fontSize: "15px",
            color: "#020617",
            marginTop: 10,
            fontWeight: 400,
            fontFamily: "fantasy",
          }}
        >
          Hospital
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#6b7280",
            marginTop: 1,
            marginBottom: 7,
            fontStyle: "italic",
          }}
        >
          {data?.hospital_name}
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            fontSize: "15px",
            color: "#020617",
            marginTop: 10,
            fontWeight: 400,
            fontFamily: "fantasy",
          }}
        >
          Doctor
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#6b7280",
            marginTop: 1,
            marginBottom: 7,
            fontStyle: "italic",
          }}
        >
          {data?.doctor_name}
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            fontSize: "15px",
            color: "#020617",
            marginTop: 10,
            fontWeight: 400,
            fontFamily: "fantasy",
          }}
        >
          Appointment Date
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#6b7280",
            marginTop: 1,
            fontStyle: "italic",
          }}
        >
          {new Date(data?.appointment_time).toLocaleString()}
        </div>
        {/* <div
          style={{
            width: "100%",
            fontSize: "18px",
            color: "#020617",
            marginTop: 10,
            fontWeight: 400,
          }}
        >
          Phone Number
        </div> */}
        <div style={{ fontSize: "16px", color: "#6b7280", marginTop: 1 }}>
          {data?.phone_number || ""}
        </div>
      </div>
      <div
        style={{
          bottom: 0,
          display: "flex",
          width: "100%",
          position: "sticky",
        }}
      >
        {data?.status === "REQUESTED" && (
          <Button
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: 0,
              zIndex: 1000,
              backgroundColor: "rgb(7,55,99)",
            }}
            onClick={() => handleChangeStatus()}
            // disabled={value === 0}
          >
            Accept
          </Button>
        )}
        {/* <Button
          variant="contained"
          sx={{ width: "50%", borderRadius: 0, backgroundColor: "Red" }}
          onClick={() => null}
        >
          Decline
        </Button> */}
      </div>
    </div>
  );
};

export default ActiveRequest;
