import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
export const Data = (props) => {
  return (
    <TableRow>
          <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.roll}</TableCell>
      <TableCell align="center">{props.city}</TableCell>
    
    </TableRow>
  );
};
