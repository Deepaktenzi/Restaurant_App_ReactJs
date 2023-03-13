import { IMG_CDN } from '../const';
const MenuHeader = ({ restaurant }) => {
  return (
    <>
      <div className="menu_nav">
        <div className="menu_header">
          <img src={IMG_CDN + restaurant.cloudinaryImageId} />
          <div className="menu_details">
            <span className="menu_heading">{restaurant.name}</span>
            <span className="menu_desc text-[#c9cace]">
              {restaurant.cuisines.join(', ')}
            </span>
            <span className="menu_desc text-[#c9cace]">{restaurant.city}</span>
            <div className="menu_info">
              <div className="menu_rating">
                <span className="font-bold">
                  ⭐️ {restaurant.avgRatingString}
                </span>
                <span className="text-[#c9cace]">
                  {restaurant.totalRatingsString}
                </span>
              </div>
              <div className="menu_delivery">
                <span className="font-bold">
                  {restaurant.sla.deliveryTime} Mins
                </span>
                <span className="text-[#c9cace]">Delivery Time</span>
              </div>
              <div className="menu_cost">
                <span className="font-bold">
                  ₹ {restaurant.costForTwo / 100}
                </span>
                <span className="text-[#c9cace]">Cost For Two</span>
              </div>
            </div>
          </div>
          <div className="menu_offer">
            <h1>OFFER</h1>
            <span>50% Off on all orders</span>
            <span>FREE CELIVERY</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
