import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { userRows } from "../../datatablesource";

const Featured = () => {
  const [data] = useState(userRows);
  const count = data.length;
  const bmiValues = data.map((data) => data.bmi);
  const sum = bmiValues.reduce((acc, bmi) => acc + bmi, 0);
  const average = sum / bmiValues.length;
  return (
    <div className="featured">
    <div className="top">
      <h1 className="title">Avarage of BMI</h1>
      <MoreVertIcon fontSize="small" />
    </div>
    <div className="bottom">
      <div className="featuredChart">
        <CircularProgressbar value={average.toFixed(2)} text={average.toFixed(2)} strokeWidth={5} />
      </div>
      <p className="title">Total samples count</p>
      <p className="amount">{count}</p>
      <p className="desc">
        Included the valid BMI values that entered via the csv.
      </p>
      {/* <div className="summary">
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize="small"/>
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Week</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Month</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default Featured