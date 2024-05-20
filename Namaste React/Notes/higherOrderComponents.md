# Higher Order Components

- it will return some piece of jsx


        // Higher Order Components
        // input  -  RestaurantsCard ==> RestaurantsCardPromoted 
        export const withPromotedLabel = (RestaurantCard) => {
        return (props) => {
            return (
            <div>
                <label className="absolute bg-black text-white m-2 p-1 rounded-lg">open</label>
                <RestaurantCard {...props} />
            </div>
            )
        }
        }