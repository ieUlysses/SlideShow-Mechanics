import { Typography } from "@mui/material";
import { styled } from "@mui/styles";

export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.pagename,
  fontFamily: "Roboto",
  fontSize: 34,
  fontWeight: "bold"
}));
