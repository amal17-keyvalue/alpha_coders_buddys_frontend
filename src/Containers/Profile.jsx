import { Divider } from "@mui/material";
import Avatar from "../avatar.webp";
import { useEffect, useState } from "react";
import { base_url } from "../constants";

const Profile = () => {
  const id = localStorage.getItem("id");
  const [data, setData] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${base_url}/buddy/${id}`);
      const x = await res.json();
      setData(x);
    }
    async function fetchImage() {
      const res = await fetch(`${base_url}/buddy/${id}/image`);
      const x = await res.json();
      setImage(x);
    }
    fetchData();
    fetchImage();
  }, []);

  console.log(image);

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
        <img src={image || Avatar} alt="" height="100px" width="100px" />
      </div>
      <Divider />
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#020617",
          marginTop: 10,
          fontWeight: 400,
        }}
      >
        Name
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 1,
        }}
      >
        {data?.name}
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#020617",
          marginTop: 15,
          fontWeight: 400,
        }}
      >
        Address
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 1,
        }}
      >
        {data?.address}
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#020617",
          marginTop: 15,
          fontWeight: 400,
        }}
      >
        City
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 1,
        }}
      >
        {data?.city}
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#020617",
          marginTop: 15,
          fontWeight: 400,
        }}
      >
        Phone Number
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 1,
        }}
      >
        {data?.phone_number}
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#020617",
          marginTop: 15,
          fontWeight: 400,
        }}
      >
        Email
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          color: "#4b5563",
          marginTop: 1,
          marginBottom: 10,
        }}
      >
        {data?.email}
      </div>
      <Divider />
      {/* <div
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
      </div> */}
    </div>
  );
};

export default Profile;
