import React, { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBicycle } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  // const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(RESTAURANT_MENU_API + resId);
  //   const json = await data.json();
  //   // setResInfo(json.data.cards[0].card.card.text)
  //   setResInfo(json);
  //   console.log(json);
  // };

  if (resInfo == null) {
    return <ShimmerCards />;
  }
  const { text } = resInfo?.data?.cards[0]?.card?.card;

  const {
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    avgRatingString,
    locality,
    sla,
    feeDetails,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  console.log(resInfo);
  // const { itemCards } =
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;
  // console.log(itemCards);
  const { cards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);
  const category =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(category);
  return (
    <div className="flex items-center flex-col ">
      <h1 className="font-bold  text-lg	font-serif my-2">{text}</h1>
      <div className="border border-gray-500 p-3 rounded-md w-6/12">
        <h3 className="rating-name font-bold font-serif">
          {" "}
          <FontAwesomeIcon icon={faStar} className=" text-green-600 " />{" "}
          {avgRatingString} ({totalRatingsString}) {"."} {costForTwoMessage}
        </h3>
        <h3 className="cusiness text-orange-600 font-bold mb-1 mt-1">
          {cuisines.join(",")}
        </h3>
        <h3 className="rating-name font-bold text-black mb-1">
          OutLate{" "}
          <span className="text-gray-500 font-thin font-sm ">{locality}</span>
        </h3>
        <h3 className="mb-2 text-gray-400">
          {sla?.minDeliveryTime} - {sla.maxDeliveryTime} Mins
        </h3>
        <hr />
        <div className=" text-gray-400">
          <FontAwesomeIcon icon={faBicycle} /> {sla?.lastMileTravelString} {"|"}{" "}
          {"₹"}
          {feeDetails.totalFee / 100} {"Delivery fee will apply "}
        </div>
      </div>
      <div>
        {/* <h4 className="font-bold text-black">Recomended ({itemCards.length})</h4> */}
        {/* 
        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            style={{
              border: "1px solid black",
              margin: "5px",
              padding: "10px",
              borderRadius: "15px",
            }}>
            <h4>{item?.card?.info?.name}</h4>
            <h5>{item.card.info.price/100}</h5>
            <h6>
              {item.card.info.ratings.aggregatedRating.rating} (
              {item.card.info.ratings.aggregatedRating.ratingCountV2}){" "}
            </h6>
            <p>{item?.card?.info?.description}</p>
          </div>
        ))} */}
       {category.map((item)=>
          <ResCategory data={item} key={item.id}/>
       )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
