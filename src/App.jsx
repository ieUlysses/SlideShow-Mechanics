import { Routes, Route } from "react-router-dom";

import Context from "./Context/Context";

import { ThemeProvider } from "@mui/material/styles";
import { React, useContext } from "react";

import Home from "./Pages/Home/Home";
import View from "./Pages/View/View";
import CustomSpeedDial from "./Componants/CustomSpeedDial/CustomSpeedDial";

import { Container } from "@mui/material";

function App() {
  const context = useContext(Context);
  const { darkModeTheme } = context;

  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
        <Container
          sx={{ backgroundColor: "surfaces.main", borderRadius: "5px" }}
        >
          <CustomSpeedDial />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="view" element={<View />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

/* 
Following tutorial from:
https://reactrouter.com/docs/en/v6/getting-started/tutorial
Not using all points. Keeping it easy breezy */

export default App;
