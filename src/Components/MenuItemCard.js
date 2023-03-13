import { IMG_CDN } from '../const';
import MenuAddRemoveItem from './MenuAddRemoveItem';
const MenuItemCard = ({ items, restImg }) => {
  return (
    <div className="menu_card">
      <div className="menu_info">
        <span className="font-[400]">{items.name}</span>
        <p className="text-sm font-[400]">
          ₹ {items.price > 0 ? items.price / 100 : items.defaultPrice / 100}
        </p>
        <p className="text-xs text-[#5c5959] mt-1">{items.description}</p>
      </div>
      <div className="menu_img">
        {items.cloudinaryImageId ? (
          <img src={IMG_CDN + items.cloudinaryImageId} alt="preview" />
        ) : (
          <img src={IMG_CDN + restImg} alt="preview" />
        )}

        <MenuAddRemoveItem items={items} />
      </div>
    </div>
  );
};
export default MenuItemCard;
