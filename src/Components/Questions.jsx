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
          Why do you feel you should work with ElderEase ?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          WHave you had personal experiences or reasons that inspired you to
          work with elderly individuals?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
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
          rows={2}
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
          rows={2}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          How do you plan to make a positive impact on the lives of the elderly
          individuals you'll be caring for?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          Name of your Institution (if a student). If not put N/A.
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          Are you currently working somewhere? If yes, mention where and what
          work are you doing? If not put N/A.
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          Which languages can you speak fluently?
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
        />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "14px", color: "#52525b" }}>
          Prefffered time of availablity
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label=""
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
        />
      </div>
    </div>
  );
};
export default Questions;
