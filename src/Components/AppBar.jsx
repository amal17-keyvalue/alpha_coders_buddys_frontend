import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarComponent = ({ onClick, hideMenu = false, title }) => {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 1000 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          {!hideMenu && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onClick}
              style={{ position: "absolute", left: 10 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title || "List"}
          </Typography> */}
          <div
            style={{
              fontFamily: "revert",
              fontSize: "22px",
              fontStyle: "italic",
            }}
          >
            Elder Buddy
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
