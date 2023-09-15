import { Box, Button, Tabs, Tab, Modal, Paper } from "@mui/material";
import BasicForm from "../Components/BasicForm";
import { useState, useEffect } from "react";
import PhotoDetect from "../Components/PhotoDetect";
import Questions from "../Components/Questions";
import AppBarComponent from "../Components/AppBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from "../loginbg.jpg";
import Hospital from "../hospital_horizontal.jpg";
import Medicine from "../medications_delivery.png";
import Shopping from "../shopping_horizontal.jpg";
import Transportation from "../transportation.jpg";
import Care from "../shopping_with_elderly.jpg";
import { base_url } from "../constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const expectedItems = [
  {
    image: Hospital,
    title: "Accompany, Assist, Ensure Safety at every hospital visit",
    descr:
      "Ensure the elderly safely navigate hospital visits: assist with logistics, provide company, and be their reliable presence",
  },
  {
    image: Medicine,
    title: "Timely Medications, Every time",
    descr:
      "Deliver essential medications to the elderly with punctuality and care, ensuring their health needs are met without delays.",
  },
  {
    image: Shopping,
    title: "More Than Assistance: Share Moments",
    descr:
      "Be the companion that brightens outings and events. Assist them with shopping, engage in conversations, and take the time to genuinely listen and connect. Your presence can turn simple",
  },
  {
    image: Transportation,
    title: "Drive Safe, Drive Supportive.",
    descr:
      "Offer timely and safe transportation for the elderly to hospitals, airports, and beyond. Be more than a driver; be their trusted journey partner",
  },
  {
    image: Care,
    title: "Drive Safe, Drive Supportive.",
    descr:
      "Offer timely and safe transportation for the elderly to hospitals, airports, and beyond. Be more than a driver; be their trusted journey partner",
  },
];

const Onboarding = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [carousalValue, setCarousalValue] = useState(0);
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    address: "",
    age: "",
    city: "",
    gender: "M",
  });

  const handleFile = (file) => {
    setFile(file);
  };

  const handleUpdateData = (data) => {
    setData(data);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleNextClick = async () => {
    const formData = new FormData();
    formData.append("file", file);
    if (value === 0) {
      setValue(1);
    } else if (value === 1) {
      setValue(2);
    } else {
      const res = await fetch(`${base_url}/buddy`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const x = await res.json();
      if (x) {
        toast("Successfully Registered");
        navigate("/login");
      }
      // await fetch(`${base_url}/buddy/${x.id}/upload`, {
      //   method: "POST",
      //   cache: "no-cache",
      //   // headers: {
      //   //   "Content-Type": "multipart/form-data;",
      //   // },
      //   body: formData,
      // });
    }
  };

  const handleBack = () => {
    if (value === 1) {
      setValue(0);
    } else if (value === 2) {
      setValue(1);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ top: 0, position: "sticky", zIndex: 1000 }}>
        <AppBarComponent hideMenu={true} title="Register" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
            >
              <Tab
                label="Details"
                {...a11yProps(0)}
                sx={{
                  textTransform: "none",
                  fontSize: "22px",
                  fontFamily: "fantasy",
                }}
              />
              <Tab
                label="Verify"
                {...a11yProps(1)}
                sx={{
                  textTransform: "none",
                  fontSize: "22px",
                  fontFamily: "fantasy",
                }}
              />
              <Tab
                label="Questions"
                {...a11yProps(1)}
                sx={{
                  textTransform: "none",
                  fontSize: "22px",
                  fontFamily: "fantasy",
                }}
              />
            </Tabs>
          </Box>
          {value === 0 && (
            <BasicForm
              handleUpdateData={handleUpdateData}
              data={data}
              handleFile={handleFile}
            />
          )}
          {value === 1 && <PhotoDetect />}
          {value === 2 && <Questions />}
        </Box>
        <div
          style={{
            bottom: 0,
            display: "flex",
            width: "100%",
            position: "sticky",
            zIndex: 10,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "50%",
              borderRadius: 0,
              zIndex: 1000,
              backgroundColor: "#FFFF",
              fontFamily: "fantasy",
            }}
            onClick={handleBack}
            disabled={value === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ width: "50%", borderRadius: 0, fontFamily: "fantasy" }}
            onClick={() => handleNextClick()}
          >
            {value !== 2 ? "Next" : "Register"}
          </Button>
        </div>
      </div>
      <Modal open={open} onClose={handleCloseDialog}>
        <Paper
          sx={{
            margin: 3,
            marginTop: 15,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {carousalValue === 0 && (
              <>
                <img
                  src={expectedItems[0].image}
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
                <div style={{ marginTop: 20 }}>{expectedItems[0].title}</div>
                <div style={{ marginTop: 20 }}>{expectedItems[0].descr}</div>
              </>
            )}
            {carousalValue === 1 && (
              <>
                <img
                  src={expectedItems[1].image}
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
                <div style={{ marginTop: 20 }}>{expectedItems[1].title}</div>
                <div style={{ marginTop: 20 }}>{expectedItems[1].descr}</div>
              </>
            )}
            {carousalValue === 2 && (
              <>
                <img
                  src={expectedItems[2].image}
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
                <div style={{ marginTop: 20 }}>{expectedItems[2].title}</div>
                <div style={{ marginTop: 20 }}>{expectedItems[2].descr}</div>
              </>
            )}
            {carousalValue === 3 && (
              <>
                <img
                  src={expectedItems[3].image}
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
                <div style={{ marginTop: 20 }}>{expectedItems[3].title}</div>
                <div style={{ marginTop: 20 }}>{expectedItems[3].descr}</div>
              </>
            )}
            {carousalValue === 4 && (
              <>
                <img
                  src={expectedItems[4].image}
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
                <div style={{ marginTop: 20 }}>{expectedItems[4].title}</div>
                <div style={{ marginTop: 20 }}>{expectedItems[4].descr}</div>
              </>
            )}
          </div>
          <div>
            <Button
              sx={{ width: "100%", marginTop: 3, textTransform: "none" }}
              variant="contained"
              onClick={
                carousalValue === 4
                  ? () => setOpen(false)
                  : () => setCarousalValue(carousalValue + 1)
              }
            >
              {carousalValue === 4 ? "Close" : "Next"}
            </Button>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default Onboarding;
