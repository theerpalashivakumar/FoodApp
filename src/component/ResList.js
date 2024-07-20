import React from "react";
import {IMAGE_ID_FOOD} from "../utils/constance"

const ResList = (props) => {
  console.log(props);
  const { name, price, description, offerTags ,imageId } = props?.data?.card?.info;
  console.log(name);
  return (
    <div>
      <div className="flex justify-between bg-slate-500 mb-5 py-4 px-2 items-center">
        <div className="mb-2 w-10/12 ">
          <h1 className="mb-2">{name}</h1>
          <h3 className="mb-1">{price / 100}</h3>
          {/* <h4>{offerTags.title}</h4> */}
          <p className="mb-2">{description}</p>
        </div>
        <div className="w-2/12">
          {/* <h5 className="bg-red-600">hello</h5> */}
          <img src={IMAGE_ID_FOOD+imageId}/>
        </div>
      </div>
    </div>
  );
};

export default ResList;
