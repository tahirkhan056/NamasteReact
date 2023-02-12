import { IMG_CDN_URL } from "../constant";

const MenuCard = ({ menu }) => {
  return (
    <div className="menu-card">
      <div className="menu-detail">
        <div className={menu.isVeg ? "veg-menu" : "nonveg-menu"}>
          <div className="colormenu"></div>
        </div>
        <h3>{menu.name}</h3>
        <h4>₹{menu.price / 100}</h4>
        <p>{menu.description}</p>
      </div>
      <div>
        <img className="menu-img" src={IMG_CDN_URL + menu.cloudinaryImageId} />
      </div>
    </div>
  );
};

export default MenuCard;
