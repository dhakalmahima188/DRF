import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Data } from "./Data";

export default function BasicTable() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/student/")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Roll No</TableCell>
              <TableCell align="center">City</TableCell>
            </TableRow>

            {data?.map((event) => {
              return (
                <Data
                  key={event.name}
                  name={event.name}
                  roll={event.roll}
                  city={event.city}
                />
              );
            })}
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
}
