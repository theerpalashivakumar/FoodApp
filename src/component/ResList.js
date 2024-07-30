import React from "react";
import {IMAGE_ID_FOOD} from "../utils/constance"
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ResList = (props) => {
  const {data} = props
  
  const dispatch = useDispatch()
  const HandleChange =(data)=>{
    dispatch(addItem(data))
 }

  console.log(props);

  // const { name , price, description ,imageId } = props?.data?.card?.info;
 
  // console.log(name);
  return (
    <div>
      <div className="flex  bg-slate-500 mb-5 py-4 px-2 items-center ">
        <div className="mb-2 w-10/12 ">
          <h1 className="mb-2 font-bold text-2xl">{data?.card?.info.name}</h1>
          <h3 className="mb-1">{data?.card?.info?.price / 100}</h3>
          {/* <h4>{offerTags.title}</h4> */}
          <p className="mb-2">{data?.card?.info.description}</p>
        </div>
        <div className="w-2/12">
          {/* <h5 className="bg-red-600">hello</h5> */}
          <img src={IMAGE_ID_FOOD+data?.card?.info.imageId} className="rounded-2xl"/>
          <span className="relative bottom-8 left-24 bg-black rounded-lg text-white p-3 cursor-pointer" onClick={()=>HandleChange(data)}> Add     +</span>
        </div>
      </div>
    </div>
  );
};

export default ResList;
