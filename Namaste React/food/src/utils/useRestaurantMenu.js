import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_DETAIL_API_END_POINT } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {
    const d = await fetch(SWIGGY_RESTAURANT_DETAIL_API_END_POINT+resId);
    const json = await d.json();
    setResInfo(json.data);
  };

  return resInfo
};

export default useRestaurantMenu;
