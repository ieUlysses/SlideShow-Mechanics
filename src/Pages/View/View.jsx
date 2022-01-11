import { Container } from "@mui/material";
import React from "react";
import List from "../../Componants/List/List";
import { Name } from "../../Componants/Page/Page";

function View() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "125px"
        }}
      >
        <Name>View </Name>
        <List />
      </Container>
    </>
  );
}

export default View;
