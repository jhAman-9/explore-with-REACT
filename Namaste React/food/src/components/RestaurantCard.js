import { CDN_URL } from "../utils/constants";

// import { CDN_URL } from "../utils/constants";
function RestaurantCard(props) {
  const stylecard = {
    background: "#f0f0f0",
  };


  return (
    <div
      className="res-card w-52 h-72  border-black p-1 hover:border hover:cursor-pointer"
      style={stylecard}
    >
      <img
        alt="res-logo"
        src={CDN_URL + props?.resData?.cloudinaryImageId}
        className="w-full h-32"
      />
      <div className="text-lg">
        <h3 className="text-lg">{props?.resData?.name}</h3>
        <div className="flex flex-wrap font-mono">
          <h4>{props?.resData?.cuisines}</h4>
        </div>
        <h4>{props?.resData?.avgRating}</h4>
        <h4>{props?.resData?.costForTwo}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
