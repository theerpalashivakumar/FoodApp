import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constance";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {useSelector} from 'react-redux'

const Header = () => {
  const[text, setText]=useState("Login")
  const onlineStatus = useOnline()
  const data =useContext(UserContext)
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)


  console.log(data)
    return (
      <div className="flex justify-between p-2 items-center border-solid border-2 border-indigo-600 bg-gray-300">
        <div>
          <img src={HEADER_LOGO}  className="w-32"/>
        </div>
        <div className="flex">
          <ul className="flex justify-around gap-6">
            <li>your Status : {onlineStatus?"Online":"Offline"}</li>
            <Link to="/"> <li>Home</li></Link>
            <Link to="/about"> <li>About</li></Link>
            <Link to="/contact"> <li>Contact Us</li></Link>
            <li><Link to="/cart">cart:({cartItems.length})</Link></li>
            <li><button className="button" onClick={()=>{
              text === "Login" ?setText("Log Out"):setText("Login");
            }}>{text}</button> {data.loggedInUser}</li>
            
          </ul>
          {/* <button className="button">Login</button> */}
          {/* <button className="button" onClick={()=>{
              text === "Login" ?setText("Log Out"):setText("Login");
            }}>{text}</button> */}
        </div>
      </div>
    );
};
export default Header