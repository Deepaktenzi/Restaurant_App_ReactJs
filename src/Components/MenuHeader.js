import { IMG_CDN } from '../const';
import Default_Img from '../assets/images/default-restaurant.webp';
const MenuHeader = ({ restaurant }) => {
  return (
    <>
      <div className="menu_nav">
        <div className="menu_header">
          {restaurant.cloudinaryImageId ? (
            <img src={IMG_CDN + restaurant.cloudinaryImageId} />
          ) : (
            <img loading="lazy" src={Default_Img} />
          )}

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
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-tag"></i> 50% Off on all orders
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-tag"></i>FREE CELIVERY
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
