import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState } from "react";
import { userRows } from "../../datatablesource";

const Widget = ({ type }) => {
  let data;
  const [datas] = useState(userRows);
  const count = datas.length;


  switch (type) {
    case "students":
      data = {
        title: "STUDENTS",
        isMoney: false,
        link: "See all students",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "sample_counts":
      data = {
        title: "SAMPLES",
        isMoney: false,
        link: "View all samples",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "facultie":
      data = {
        title: "FACULTIES",
        isMoney: false,
        link: "View all faculties",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    //   case "balance":
    //     data = {
    //       title: "BALANCE",
    //       isMoney: true,
    //       link: "See details",
    //       icon: (
    //         <AccountBalanceWalletOutlinedIcon
    //           className="icon"
    //           style={{
    //             backgroundColor: "rgba(128, 0, 128, 0.2)",
    //             color: "purple",
    //           }}
    //         />
    //       ),
    //     };
    //     break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {count}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;