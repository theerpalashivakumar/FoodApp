import React, { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router";
import { RESTAURANT_MENU_API } from "../utils/constance";

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
const { avgRating, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <h1>{text}</h1>
      <h3>{avgRating}</h3>
      <h3>{cuisines.join(',')}</h3>
      <h3>{costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
