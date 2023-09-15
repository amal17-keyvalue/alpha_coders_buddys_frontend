import { Button } from "@mui/material";
import Avatar from "../avatar.webp";
import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "./style.css";
import { base_url } from "../constants";

const ActiveRequest = () => {
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

  const center = useMemo(() => ({ lat: 10.0064046, lng: 76.3642557 }), []);
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
        <div style={{ fontSize: "18px", color: "#52525b", marginTop: 7 }}>
          name
        </div>
        <div style={{ fontSize: "18px", color: "#52525b", marginTop: 7 }}>
          date
        </div>
        <div style={{ fontSize: "18px", color: "#52525b", marginTop: 7 }}>
          hospital name
        </div>
        <div style={{ fontSize: "18px", color: "#52525b", marginTop: 7 }}>
          doctor name
        </div>
        <div style={{ fontSize: "18px", color: "#52525b", marginTop: 7 }}>
          appoinment time
        </div>
        <div style={{ fontSize: "18px", color: "#52525b", marginTop: 7 }}>
          phone
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
        <Button
          variant="contained"
          sx={{
            width: "50%",
            borderRadius: 0,
            zIndex: 1000,
            backgroundColor: "Green",
          }}
          onClick={() => null}
          // disabled={value === 0}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          sx={{ width: "50%", borderRadius: 0, backgroundColor: "Red" }}
          onClick={() => null}
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default ActiveRequest;
