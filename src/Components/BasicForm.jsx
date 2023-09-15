import { TextField, Checkbox } from "@mui/material";
import { useState, useRef } from "react";
import Camera from "@mui/icons-material/CameraAltOutlined";

const BasicForm = ({ handleUpdateData, data, handleFile }) => {
  const [checked, setChecked] = useState(false);
  const fileInput = useRef(null);

  const handleChange = (event) => {
    handleUpdateData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const uploadFile = (e) => {
    handleFile(e);
  };

  const openFileWindow = () => {
    fileInput.current.click();
  };

  return (
    <div
      style={{
        padding: 30,
        display: "flex",
        flexDirection: "column",
        marginTop: "-30px",
      }}
    >
      <TextField
        name="email"
        fullWidth
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ marginTop: 3 }}
        onChange={handleChange}
        value={data?.email}
        size="small"
        InputProps={{ sx: { fontSize: "18px" } }}
        InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
      />
      <TextField
        name="password"
        type="password"
        fullWidth
        id="outlined-basic"
        label="Password"
        variant="outlined"
        sx={{ marginTop: 3 }}
        onChange={handleChange}
        value={data?.password}
        size="small"
        InputProps={{ sx: { fontSize: "18px" } }}
        InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
      />
      <TextField
        name="name"
        fullWidth
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        sx={{ marginTop: 3 }}
        onChange={handleChange}
        value={data?.name}
        size="small"
        InputProps={{ sx: { fontSize: "18px" } }}
        InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
      />
      <TextField
        name="phone_number"
        fullWidth
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        sx={{ marginTop: 3 }}
        onChange={handleChange}
        value={data?.phone}
        size="small"
        InputProps={{ sx: { fontSize: "18px" } }}
        InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
      />
      <TextField
        fullWidth
        name="age"
        id="outlined-basic"
        label="Age"
        variant="outlined"
        sx={{ marginTop: 3 }}
        onChange={handleChange}
        value={data?.age}
        size="small"
        InputProps={{ sx: { fontSize: "18px" } }}
        InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
      />
      <TextField
        fullWidth
        name="address"
        id="outlined-basic"
        label="Address"
        multiline
        rows={4}
        sx={{ marginTop: 3 }}
        onChange={handleChange}
        value={data?.address}
        size="small"
        InputProps={{ sx: { fontSize: "18px" } }}
        InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
      />
      <TextField
        fullWidth
        name="city"
        id="outlined-basic"
        label="City of residence"
        variant="outlined"
        sx={{ marginTop: 3 }}
        onChange={handleChange}
        value={data?.city}
        size="small"
        InputProps={{ sx: { fontSize: "18px" } }}
        InputLabelProps={{ sx: { fontSize: "16px", fontFamily: "cursive" } }}
      />

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
          {/* <div
            style={{
              width: "100%",
              height: "90px",
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
            Click here to upload photo
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
