# Custom Hook
- Custom Hooks made code easily testable  

        const useRestaurantMenu = (resId) => {
            const [resInfo,  setResInfo] = useState([])

            useEffect(() => {
                fetchData();
            }, []);
            
            const fetchData = async () => {
                const Data = await fetch(
                SWIGGY_RESTAURANT_DETAIL_API_END_POINT + resId
                );
                const json = await Data.json();
                setResInfo(json.data);
            }

            return resInfo;
        }

        export default useRestaurantMenu;