const RestaurentCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
  } = props.data;
  return (
    <div className="restaurent-card">
      <div className="img-div">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt="img"
          className="restaurent-img"
        />
      </div>
      <div className="description">
        <div className="restaurent-name">{name}</div>
        <div className="cusine">{cuisines.join(", ")}</div>
      </div>
      <div className="description flex-row">
        <div>{avgRating}</div>
        <div>{slaString}</div>
        <div>{costForTwoString}</div>
      </div>
      <div></div>
    </div>
  );
};
export default RestaurentCard;
