import { Paper } from "@mui/material";
import Hospital from "../hospital_icon.jpg";
import Transportation from "../transportation_icon.jpg";
import Medicine from "../medicinesicon.png";
import Accompany from "../accompany_icon.png";
import { useNavigate } from "react-router-dom";

const lists = [
  {
    name: "Hospital",
    type: "Hospital",
    id: "HDEIC1536344",
    status: "Requested",
  },
  {
    name: "Deliver Medicines",
    type: "Medicine",
    id: "HDEIC153644",
    status: "Accepted",
  },
  {
    name: "Accompany",
    type: "Accompany",
    id: "HDEIC1534",
    status: "Started",
  },
  {
    name: "Transportation",
    type: "Transportation",
    id: "HDEIC153434",
    status: "Completed",
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
                    {item.name}
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "10px",
                      color: "#6b7280",
                      marginTop: "4px",
                      padding: 2,
                      backgroundColor: "#f3f4f6",
                      paddingLeft: 4,
                      paddingRight: 4,
                      borderRadius: 4,
                      minWidth: "54px",
                      textAlign: "center",
                    }}
                  >
                    {item.status}
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
                  {item.id}
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#6b7280",
                    marginTop: "5px",
                  }}
                >
                  {item.time}
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
