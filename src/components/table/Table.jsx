import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { userRows } from "../../datatablesource";

const List = () => {
  const [rows] = useState(userRows);
    // const rows = [
    //     {
    //       id: 1143155,
    //       product: "Acer Nitro 5",
    //       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //       customer: "John Smith",
    //       date: "1 March",
    //       amount: 785,
    //       method: "Cash on Delivery",
    //       status: "Approved",
    //     },
    //     {
    //       id: 2235235,
    //       product: "Playstation 5",
    //       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    //       customer: "Michael Doe",
    //       date: "1 March",
    //       amount: 900,
    //       method: "Online Payment",
    //       status: "Pending",
    //     },
    //     {
    //       id: 2342353,
    //       product: "Redragon S101",
    //       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    //       customer: "John Smith",
    //       date: "1 March",
    //       amount: 35,
    //       method: "Cash on Delivery",
    //       status: "Pending",
    //     },
    //     {
    //       id: 2357741,
    //       product: "Razer Blade 15",
    //       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    //       customer: "Jane Smith",
    //       date: "1 March",
    //       amount: 920,
    //       method: "Online",
    //       status: "Approved",
    //     },
    //     {
    //       id: 2342355,
    //       product: "ASUS ROG Strix",
    //       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    //       customer: "Harold Carol",
    //       date: "1 March",
    //       amount: 2000,
    //       method: "Online",
    //       status: "Pending",
    //     },
    //   ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Sample No.</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Faculty</TableCell>
            <TableCell className="tableCell">Age</TableCell>
            <TableCell className="tableCell">Academic Year</TableCell>
            <TableCell className="tableCell">Ethnicity</TableCell>
            <TableCell className="tableCell">BMI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 10).map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.faculty}</TableCell>
              <TableCell className="tableCell">{row.age}</TableCell>
              <TableCell className="tableCell">{row.academicYear}</TableCell>
              <TableCell className="tableCell">{row.ethnicity}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.bmi}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List