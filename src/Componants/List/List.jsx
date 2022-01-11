import { React, useContext } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

import Context from "../../Context/Context";

function List() {
  const context = useContext(Context);
  const { values } = context;

  const CustomCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.text.primary
  }));

  const EmphasisCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.text.emphasis,
    fontWeight: "bold"
  }));

  return (
    <TableContainer
      component={Paper}
      elevation={15}
      sx={{ backgroundColor: "surfaces.primary", width: 400 }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <CustomCell>Position</CustomCell>
            <CustomCell align="right">0</CustomCell>
            <CustomCell align="right">1</CustomCell>
            <CustomCell align="right">2</CustomCell>
            <CustomCell align="right">3</CustomCell>
            <CustomCell align="right">4</CustomCell>
            <CustomCell align="right">5</CustomCell>
            <CustomCell align="right">6</CustomCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <EmphasisCell>Value</EmphasisCell>
            {values.map((value) => (
              <EmphasisCell align="right">{value}</EmphasisCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
