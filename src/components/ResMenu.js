import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/constants";
import { useParams } from "react-router";

const ResMenu = (props) => {
    const [resMenu, setResMenu] = useState(null);
    const [error, setError] = useState(null);

    const { resId } = useParams();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(RES_MENU + resId);
                const jsonData = await response.json();
                setResMenu(jsonData.data);
            } catch (err) {
                setError("Failed to load menu.");
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const { name, cuisines } = resMenu?.cards?.[2]?.card?.card?.info || {};
    const itemCards =
        resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[10]?.card?.card?.itemCards || [];

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {name && <h1>{name}</h1>}
            {cuisines && <h2>{cuisines.join(", ")}</h2>}
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResMenu;
