import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import Skimmer from "./Skimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6852956&lng=83.20374009999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json()

        setListOfRestaurents(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setIsLoading(false);
    }

    if (isLoading) {
        return <Skimmer />
    }

    return (
        <div className="body">
            <div className="search">
                <input onChange={(e) => {
                    setSearchText(e.target.value)
                }} />
                <button onClick={() => {
                    const filteredRestaurants = listOfRestaurents.filter(restaurant =>
                        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setListOfRestaurents(filteredRestaurants);
                }}>Search</button>
            </div>
            <button onClick={() => {
                const filterdata = listOfRestaurents.filter((res) => res.info.avgRating > 4);
                setListOfRestaurents(filterdata)
            }}>Filter</button>
            <div className="res-container">
                {listOfRestaurents.map((restaurant) => (
                    <Link
                        key={restaurant?.info?.id}
                        to={"/ResMenu/" + restaurant?.info?.id}
                    >
                        <Restaurants resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;