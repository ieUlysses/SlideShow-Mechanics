import { Container } from "@mui/material";
import React from "react";
import { Name } from "../../Componants/Page/Page";
import ResultBox from "../../Componants/ResultBox/ResultBox";

function Home() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "125px"
        }}
      >
        <Name>Home </Name>
        <ResultBox />
      </Container>
    </>
  );
}

export default Home;
