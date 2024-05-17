import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const RestorentMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer/>;

  const {
    name,
    cuisines,
    // cloudinaryImageId,
    // areaName,
    // avgRating,
    costForTwoMessage,
  } = resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <h1 className="text-2xl">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h3 className="font-bold m-4">Menu</h3>
      <ul className="flex flex-col">
        {itemCards.map((item) => (
          <l1>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice /100 }
          </l1> 
        ))}
      </ul>
    </div>
  );
};

export default RestorentMenu;
