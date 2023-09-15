import { TextField, Checkbox } from "@mui/material";
import { useState, useRef } from "react";
import Camera from "@mui/icons-material/CameraAltOutlined";

const BasicForm = () => {
  const [checked, setChecked] = useState(false);
  const fileInput = useRef(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const uploadFile = (e) => {
    console.log(e);
  };

  const openFileWindow = () => {
    fileInput.current.click();
  };

  return (
    <div style={{ padding: 30, display: "flex", flexDirection: "column" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ marginTop: 3 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Password"
        variant="outlined"
        sx={{ marginTop: 3 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        sx={{ marginTop: 3 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        sx={{ marginTop: 3 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Age"
        variant="outlined"
        sx={{ marginTop: 3 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Address"
        multiline
        rows={4}
        sx={{ marginTop: 3 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="City of residence"
        variant="outlined"
        sx={{ marginTop: 3 }}
      />
      {checked && (
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
              height: "auto",
              overflow: "auto",
            }}
          >
            <input
              type="file"
              accept=".jpeg, .jpg, .png"
              style={{
                display: "none",
              }}
              ref={fileInput}
              onChange={(evt) => uploadFile(evt.target.files[0])}
              // eslint-disable-next-line no-param-reassign
              onClick={(evt) => {
                evt.currentTarget.value = null;
              }}
            />
            <div
              style={{
                width: "100%",
                height: "90px",
                marginRight: "10px",
                marginBottom: "10px",
                backgroundColor: "#fff",
                border: "1px dashed #d2d7db",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              role="presentation"
              onClick={openFileWindow}
            >
              <Camera />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicForm;
