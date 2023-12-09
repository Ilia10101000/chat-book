"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Container } from "@mui/material";
import React, { ReactNode, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

interface ThemeProps {
  children: ReactNode;
}

function Theme({ children }: ThemeProps) {
  const [mode, setMode] = React.useState("light");

    const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode:mode
      },
      components: {
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              position: 'absolute',
              top: '55px'
            }
          }
        }
      }
    });
  }, [mode]);

    const toogleThemeMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {mode === "light" ? (
        <NightsStayIcon
          fontSize="large"
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={toogleThemeMode}
        />
      ) : (
        <WbSunnyIcon
          fontSize="large"
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={toogleThemeMode}
        />
      )}
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

export { Theme };
