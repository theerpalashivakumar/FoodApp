import { useState } from "react";
import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constance";
import useOnline from "../utils/useOnline";

const Header = () => {
  const[text, setText]=useState("Login")
  const onlineStatus = useOnline()
    return (
      <div className="header">
        <div>
          <img src={HEADER_LOGO}  className="logo"/>
        </div>
        <div className="nav">
          <ul>
            <li>your Status : {onlineStatus?"Online":"Offline"}</li>
            <Link to="/"> <li>Home</li></Link>
            <Link to="/about"> <li>About</li></Link>
            <Link to="/contact"> <li>Contact Us</li></Link>
            
            
          </ul>
          {/* <button className="button">Login</button> */}
          <button className="button" onClick={()=>{
              text === "Login" ?setText("Log Out"):setText("Login");
            }}>{text}</button>
        </div>
      </div>
    );
};
export default Header