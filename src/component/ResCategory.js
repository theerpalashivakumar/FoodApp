import React, { useState } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResList from "./ResList";

const ResCategory = (props) => {
  const { title, itemCards } = props?.data?.card?.card;
  const {viewList,setShowIndex} =props
//   const [viewList, setViewList] = useState(false);
  console.log(title);
  console.log(props);
  const handleChandle = () => {
    setShowIndex()
  };
  return (
    <div className="bg-slate-300 mt-2 w-100% px-5 py-2">
      <div className="flex justify-between" onClick={handleChandle}>
        <h1 className="text-black  font-bold font-lg font-serif">
          {title} ({itemCards.length})
        </h1>
        <p>
          <FontAwesomeIcon icon={faArrowDown} />
        </p>
      </div>
      {/* <div>
            { itemCards.map((item)=>
            <ResList data={item} key={item.id}/> 
              
                
            )}
        </div> */}
      {viewList && (
        <div>
          {itemCards.map((item) => (
            <ResList data={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResCategory;
