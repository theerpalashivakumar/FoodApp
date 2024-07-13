import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Header from './component/Header'
import Body from './component/Body'

import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./component/Contact";
// import About from "./component/About";
import Error from './component/Error'
import RestaurantMenu from "./component/RestaurantMenu";

const About = lazy(()=>import("./component/About"))

const App = () => {
  return (
    <div>
      <Header />
     <Outlet/>
    </div>
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
