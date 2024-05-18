import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";


const RestorentMenu = () => {

  // const CDN_URL =
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  
  const { resId } = useParams();

  let resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer/>;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    // areaName,
    // avgRating,
    costForTwoMessage,
  } = resMenu.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  return (
    <div>
      <div>{CDN_URL+cloudinaryImageId}</div>
      <h1 className="text-2xl">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h3 className="font-bold m-4">Menu</h3>
      <ul className="flex flex-col">
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name} - {"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestorentMenu;
