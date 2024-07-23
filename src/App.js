import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Header from './component/Header'
import Body from './component/Body'

import { createBrowserRouter ,RouterProvider,Outlet ,} from "react-router-dom";
import Contact from "./component/Contact";
// import About from "./component/About";
import Error from './component/Error'
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";

const About = lazy(()=>import("./component/About"))

const App = () => {
 const [userName,setUserName]=useState("")

 useEffect(()=>{
    //make an api call to the server and get the data of the user from the db
    const data = {
      name:"shiva"
    }
    setUserName(data.name)
 },[])

  return (
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div>
      <Header />
     <Outlet/>
    </div>
    </UserContext.Provider>
  );
};


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
      path:"/about",
      element:<Suspense fallback={<h1>hello liading....</h1>}><About/></Suspense>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },

    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
