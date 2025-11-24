import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import { CircularProgress, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Header from "./header/header";
import { Suspense, useState } from "react";
import { darkTheme, lightTheme } from "../configs/default_config/mui_theme";
import { loadState } from "../configs/localStorej/localstorej";

export default function MainLayout() {
  const [mode, setmode] = useState(loadState("mod") || "light")
  return (
    <Stack>
      <Stack>
        <Stack style={{ position: "fixed", zIndex: "2", width: "100%", backgroundColor: mode == "light" ? "#fff" : "black", marginBottom: "100px" }}>
          <ThemeProvider theme={mode == "dark" ? darkTheme : lightTheme}  >
            <CssBaseline />

            <Suspense fallback={<CircularProgress />}>
              <Header setmode={setmode} />
            </Suspense>
          </ThemeProvider>
        </Stack>
        <Stack paddingTop={"344px"}>
          <Outlet />
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  )
}
