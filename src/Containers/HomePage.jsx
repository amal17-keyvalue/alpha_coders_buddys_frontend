import { Paper } from "@mui/material";
import Hospital from "../hospital_icon.jpg";
import Transportation from "../transportation_icon.jpg";
import Medicine from "../medicinesicon.png";
import Accompany from "../accompany_icon.png";
import { useNavigate } from "react-router-dom";

const lists = [
  {
    name: "name1",
    type: "Hospital",
    id: 1,
  },
  {
    name: "name1",
    type: "Medicine",
    id: 2,
  },
  {
    name: "name1",
    type: "Accompany",
    id: 3,
  },
  {
    name: "name1",
    type: "Transportation",
    id: 4,
  },
  {
    name: "name1",
    type: "Hospital",
    id: 5,
  },
  {
    name: "name1",
    type: "Hospital",
    id: 6,
  },
];

const getIcon = (type) => {
  switch (type) {
    case "Hospital":
      return Hospital;
    case "Medicine":
      return Medicine;
    case "Accompany":
      return Accompany;
    case "Transportation":
      return Transportation;
    default:
      return Hospital;
  }
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/active");
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", padding: 9 }}>
        {lists?.map((item) => (
          <Paper
            sx={{
              padding: 2,
              marginTop: 2,
              borderRadius: 2,
              width: "full",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }} onClick={handleCardClick}>
              <img
                src={getIcon(item?.type)}
                alt=""
                style={{ height: "60px", width: "60px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "8px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      color: "#6b7280",
                    }}
                  >
                    name
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "10px",
                      color: "#6b7280",
                      marginTop: "4px",
                    }}
                  >
                    status
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#6b7280",
                    marginTop: "5px",
                  }}
                >
                  id
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#6b7280",
                    marginTop: "5px",
                  }}
                >
                  time
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
