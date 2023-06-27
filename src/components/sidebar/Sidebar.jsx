import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./sidebar.scss"

const Sidebar = () => {
    // const { dispatch } = useContext(DarkModeContext);
    const [error, setError] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const navitage = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
    
        signOut(auth)
          .then(() => {
            dispatch({type:"LOGOUT"})
            navitage("/login")
          })
          .catch((error) => {
            setError(true, error);
          });
      };

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">Meddos</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <Link to="/students" style={{ textDecoration: "none" }}>
                    <li>
                        <PersonOutlineIcon className='icon'/>
                        <span>Students</span>
                    </li>
                    </Link>
                    <p className="title">Docs</p>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span>Reports</span>
                    </li>
                    <p className="title">Account</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <ExitToAppIcon className='icon'/>
                        <span type="submit">Logout</span>
                    </li>
                </ul>
            </div>
            {/* <div className="bottom">
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
        </div>
    )
}

export default Sidebar