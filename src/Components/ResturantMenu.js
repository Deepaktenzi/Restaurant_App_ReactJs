import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import MenuHeader from './MenuHeader';
import MenuItemCard from './MenuItemCard';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import EmptyCart from './EmptyCart';

const ResturantMenu = () => {
  const { resId } = useParams();
  const [restaurantItems, category, resturantInfo] = useRestaurantMenu(resId);

  const cartItems = useSelector((store) => store.cart.items);
  const scrollToSection = (e, val) => {
    e.preventDefault();
    const element = document.getElementById(val);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return !restaurantItems ? (
    <Shimmer />
  ) : (
    <>
      <MenuHeader restaurant={resturantInfo} />
      <div className="menu_container">
        <div className="menu_category">
          {category.map((val, idx) => {
            return (
              <span
                onClick={(e) => scrollToSection(e, val.split(' ')[0])}
                key={idx}
              >
                {val}
              </span>
            );
          })}
        </div>

        <div className="menu_item">
          {category.map((cat, idx) => {
            const catFilter = restaurantItems.filter(
              (val) => val.card.info.category == cat
            );
            return (
              <div className="menu_section" id={cat.split(' ')[0]} key={idx}>
                <div className="category_heading ">{cat}</div>
                <div className="category_count">{catFilter.length} ITEMS</div>
                {catFilter.map((filteredMenu) => {
                  return (
                    <MenuItemCard
                      items={filteredMenu.card.info}
                      restImg={restaurantItems.imageId}
                      key={filteredMenu.id}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="menu_cart">
          {cartItems.length == 0 ? <EmptyCart /> : <CartItems />}
        </div>
      </div>
    </>
  );
};
export default ResturantMenu;
