import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestorentMenu = () => {
    const [resMenu, setResMenu] = useState([]);
    
    const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.80570&lng=86.18040&collection=80426&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    console.log(json);
    setResMenu(json.data);
  };

  if (resMenu === null) return <Shimmer />;

  const {
    name,
    id,
    avgRating,
    areaName,
    cuisines,
    costForTwo,
    // cloudinaryImageId,
  } = resMenu?.cards[3]?.card?.card?.info;

  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>{areaName}</p>
        <h2>{cuisines}</h2>
        <ul>
          <li>{avgRating}</li>
          <li>{costForTwo}</li>
          <li> {id}</li>
        </ul>
      </div>
    </>
  );
};

export default RestorentMenu;
