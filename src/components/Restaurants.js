const Restaurants = ({ resData }) => {
    const restaurant = resData?.info;

    if (!restaurant) return null;

    const { name, avgRating, cuisines, cloudinaryImageId } = restaurant;

    return (
        <div className="res-container">
            <div className="resBody">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
                <h3>{name}</h3>
                <h3>{cuisines?.join(", ")}</h3>
                <h3>{avgRating}</h3>
            </div>
        </div>
    );
};

export default Restaurants;