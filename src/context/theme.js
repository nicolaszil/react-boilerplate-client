import React, { useMemo } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { GlobalCSS } from "./css";

export const ThemeProvider = ({ children }) => {

  const theme = useMemo(() => createMuiTheme(styles));

  return (
    <MuiThemeProvider theme={theme}>
      <GlobalCSS />
      {children}
    </MuiThemeProvider>
  );
};

const styles = {
  palette: {
    background: {
      paper: '#FFFFFF',
      default: "#FFFFFF"
    },
    primary: {
      main: "#DB2F3C",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#555555",
    },
  },
  typography: {
    h1: {
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 300,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
      letterSpacing: "0.5px",
    },
    h3: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: 900,
      letterSpacing: "0.5px",
    },
    h4: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      letterSpacing: "0.5px",
    },
    h5: {
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: 400,
      letterSpacing: "0.5px",
    },
    h6: {
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
    subtitle1: {
      fontSize: "26px",
      lineHeight: "36px",
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    subtitle2: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 400,
      letterSpacing: "0.5px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 300,
      letterSpacing: "0.5px",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 800,
      letterSpacing: "0.5px",
    },
    button: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 600,
      letterSpacing: "0.5px",
      textTransform: "none",
    },
  },
};
