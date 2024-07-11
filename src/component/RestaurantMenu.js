import React, { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router";
import { RESTAURANT_MENU_API } from "../utils/constance";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faBicycle } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    // setResInfo(json.data.cards[0].card.card.text)
    setResInfo(json);
    console.log(json);
  };

  
  

if(resInfo==null){
    return <ShimmerCards/>
}
const { text } = resInfo?.data?.cards[0]?.card?.card;
const { avgRating, costForTwoMessage, cuisines,totalRatingsString,avgRatingString ,locality,sla,feeDetails} =
    resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
  return (
    <div>
      <h1>{text}</h1>
      <div className="restaurant-details-card">
      <h3 className="rating-name">  <FontAwesomeIcon icon={faStar} className="icon-rating"/> {avgRatingString}  ({totalRatingsString})     {"."} {costForTwoMessage}</h3>
      <h3 className="cusiness">{cuisines.join(',')}</h3>
      <h3 className="rating-name">OutLate  <span style={{color:"gray"}}>{locality}</span></h3>
      <h3 className="rating-name">{sla?.minDeliveryTime} - {sla.maxDeliveryTime} Mins</h3>
      <hr/>
      <div style={{fontSize:"16px",fontWeight:"bold"}}>
      <FontAwesomeIcon icon={faBicycle}/> {sla?.lastMileTravelString} {"|"} {"₹"}{feeDetails.totalFee/100} {"Delivery fee will apply "}
      </div>
      </div>
      <div>
        <h4>Recomended ({itemCards.length})</h4>
        
        {itemCards.map((item)=>(
            <div key={item.card.info.id} style={{border:"1px solid black" ,margin:"5px",padding:"10px", borderRadius:"15px"}}>
            <h4>{item?.card?.info?.name}</h4>
            <h5>{item.card.info.price}</h5>
            <h6>{item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2}) </h6>
            <p>{item?.card?.info?.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
