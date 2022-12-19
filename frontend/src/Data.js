import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
export const Data = (props) => {
  // props are type of  object where value of attributes of a tag is stored
  return (
    <TableRow>
      {/* <TableCell>{props.id}</TableCell> */}
      <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.roll}</TableCell>
      <TableCell align="center">{props.city}</TableCell>
    
    </TableRow>
  );
};
