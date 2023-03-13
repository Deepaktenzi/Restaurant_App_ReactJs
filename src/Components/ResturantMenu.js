import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMG_CDN } from '../const';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import MenuHeader from './MenuHeader';
import MenuItemCard from './MenuItemCard';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import EmptyCart from './EmptyCart';

const ResturantMenu = () => {
  const { resId } = useParams();
  const [restaurant, category] = useRestaurantMenu(resId);

  const cartItems = useSelector((store) => store.cart.items);
  const scrollToSection = (e, val) => {
    e.preventDefault();
    const element = document.getElementById(val);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <MenuHeader restaurant={restaurant} />
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
            const catFilter = Object.values(restaurant.menu.items).filter(
              (val) => val.category == cat
            );
            return (
              <div className="menu_section" id={cat.split(' ')[0]} key={idx}>
                <span className="category_heading ">{cat}</span>
                <span className="category_count">{catFilter.length} ITEMS</span>
                {catFilter.map((filteredMenu) => {
                  return (
                    <MenuItemCard
                      items={filteredMenu}
                      restImg={restaurant.cloudinaryImageId}
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
