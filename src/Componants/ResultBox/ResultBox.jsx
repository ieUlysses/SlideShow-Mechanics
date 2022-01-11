import {
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography
} from "@mui/material";
import { styled } from "@mui/system";
import { React, useContext } from "react";
import Context from "../../Context/Context";
import DecreaseBtn from "../DecreaseBtn/DecreaseBtn";
import IncreaseButton from "../IncreaseBtn/IncreaseBtn";
import ResetBtn from "../ResetBtn/ResetBtn";

function ResultBox() {
  const context = useContext(Context);
  const { count, values } = context;

  const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontFamily: "PlayfairDesign",
    fontSize: 34,
    textAlign: "center"
  }));

  const Error = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center"
  }));

  /* Heyy: Here's the issue. I want to create a tutorial app that displays slides, one by one that is navigated by the + , - or reset btns. I anm trying to create a function that will prompt the user to reset the slide once they have cycled through the slides. I thought I could keep track of the number of slide they were on by creating a counter. I figured that if the counter's value is more than the lenght of the array (Values) then the slideshow would be over. so If the user clicks 8 times and there's only 7 slides then the prompt comes. I've tried using switch statements, if else and I cant ccome up with the logic  */

  /* function Control() {
    if (count >= values.length) {
      console.log(" not between ");
      return <Error>Please Reset Counter</Error>;
    } else if (count <= values.length) {
      console.log(" not between ");
      return <Error>Please Reset Counter</Error>;
    } else {
      console.log("Between");
      return <Value>{values[`${count}`]}</Value>;
    }
  } */

  function Control() {
    //if count is laregr than lenght of array then  or if count is less or equal to -1
    if (count >= values.length || count <= -1) {
      //console.log(" not between ");
      return <Error>Please Reset Counter</Error>;
    } else {
      //console.log("Between");
      return <Value>{values[`${count}`]}</Value>;
    }
  }

  console.log(values.length);

  console.log(count);

  return (
    <>
      <Card
        sx={{ maxWidth: 150, backgroundColor: "surfaces.primary" }}
        component={Paper}
        elevation={8}
      >
        <CardContent>
          <Control />
        </CardContent>
        <CardActions>
          <DecreaseBtn />
          <ResetBtn />
          <IncreaseButton />
        </CardActions>
      </Card>
    </>
  );
}

export default ResultBox;
