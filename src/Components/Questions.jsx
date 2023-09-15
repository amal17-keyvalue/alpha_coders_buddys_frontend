import { TextField } from "@mui/material";

const Questions = () => {
  return (
    <div
      style={{
        padding: 10,
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          Why do you feel you should work with Elderbuddy ?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={1}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          Have you had personal experiences or reasons that inspired you to work
          with elderly individuals?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={1}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          List a few things you like about elderly
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={1}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          One thing that annoys you about older people?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={1}
          sx={{ marginTop: 1 }}
        />
      </div>
    </div>
  );
};
export default Questions;
