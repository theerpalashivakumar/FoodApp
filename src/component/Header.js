import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const[text, setText]=useState("Login")
    return (
      <div className="header">
        <div>
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105934/1855.png"  className="logo"/>
        </div>
        <div className="nav">
          <ul>
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