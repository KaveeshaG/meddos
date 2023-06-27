import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { userRows } from "../../datatablesource";

const Single = ({ studentId }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Find the student with the matching ID from userRows
    const foundStudent = userRows.find((row) => row.id === studentId);
    setStudent(foundStudent);
  }, [studentId]);

  if (!student) {
    return null; // Return null or show a loading spinner if student is not found
  }

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{student.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">{student.age}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Faculty:</span>
                  <span className="itemValue">{student.faculty}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Academic Year:</span>
                  <span className="itemValue">{student.academicYear}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ethnicity:</span>
                  <span className="itemValue">{student.ethnicity}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">BMI:</span>
                  <span className="itemValue">{student.bmi}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single