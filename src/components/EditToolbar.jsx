import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { openModal } from "./MainSection";
import DeleteModal from "./DeleteModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E2E3F3",
    color: "#253053",
    fontWeight: 800,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const func = useContext(openModal);
  const [open, setOpen, data, setData] = func;
  // console.log(open, setOpen)
  const handleOpen = () => setOpen(true);
  console.log(data);

  const editTableValues = (e) => {
    // handleOpen()
    const obj = e.target;
    const deleted = obj.slice(0, 1);
    setData(deleted);
  };

  // console.log(open, setOpen)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align="center">
              Email address (prsonal)
            </StyledTableCell>
            <StyledTableCell align="center">Mobil Number</StyledTableCell>
            <StyledTableCell align="center">Department</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.fullName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.mobile}</StyledTableCell>
              <StyledTableCell align="center">{row.department} </StyledTableCell>
              <StyledTableCell align="center">{row.city} </StyledTableCell>
              <StyledTableCell align="center">{row.gender} </StyledTableCell>
              <StyledTableCell align="center">{row.date.$d} </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  onClick={() => editTableValues()}
                  variant="contained"
                  color="success"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                {/* <Button onClick={} variant="contained" color="error" style={{margin:2}}>
                      <FontAwesomeIcon icon={faDeleteLeft}/>
                </Button> */}
                <DeleteModal />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
