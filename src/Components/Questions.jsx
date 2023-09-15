import { TextField } from "@mui/material";

const Questions = () => {
  return (
    <div
      style={{
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontSize: "17px", color: "#52525b", fontFamily: "cursive" }}
        >
          Why do you feel you should work with Elderbuddy ?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
          InputProps={{ sx: { fontSize: "16px" } }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontSize: "17px", color: "#52525b", fontFamily: "cursive" }}
        >
          Have you had personal experiences or reasons that inspired you to work
          with elderly individuals?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
          InputProps={{ sx: { fontSize: "16px" } }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontSize: "17px", color: "#52525b", fontFamily: "cursive" }}
        >
          List a few things you like about the elderly
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
          InputProps={{ sx: { fontSize: "16px" } }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontSize: "17px", color: "#52525b", fontFamily: "cursive" }}
        >
          One thing that annoys you about older people?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
          InputProps={{ sx: { fontSize: "16px" } }}
        />
      </div>
    </div>
  );
};
export default Questions;
