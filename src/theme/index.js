import { createTheme } from "@mui/material";
import colors from "./base/colors";
import typography from "./base/typography";

export default createTheme({
  palette: { ...colors },
  typography: { ...typography },
});
