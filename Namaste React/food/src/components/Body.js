import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link, useParams } from "react-router-dom";
import { SWIGGY_API, SWIGGY_RESTAURANT_DETAIL_API_END_POINT } from "../utils/constants";

function Body() {
  const [rest, setRest] = useState([]);
  const [filterRest, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      SWIGGY_API
    );
    const json = await data.json();
    console.log(json);

    setRest(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return rest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-1">
      <div className="head p-3 flex items-center gap-12">
        <input type="text" placeholder="search food" />
        <button
          className="cursor-pointer"
          onClick={() => {
            const filterRest = rest.filter(
              (res) => res?.info?.resData?.avgRating >= 4
            );
            setFilteredRestaurants(filterRest);
          }}
        >
          filter
        </button>
      </div>

      <div className="res-container flex flex-wrap m-1">
        {filterRest.map((item) => (
          <Link key={item?.info?.id} to={"restaurants/" + item?.info?.id}>
            <RestaurantCard resData={item?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
