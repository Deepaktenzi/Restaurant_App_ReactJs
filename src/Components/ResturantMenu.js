import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMG_CDN } from '../const';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const ResturantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu_page">
      <div className="menu_resturant">
        <img src={IMG_CDN + restaurant.cloudinaryImageId} />
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div className="menu_item">
        {Object.values(restaurant?.menu?.items).map((item) => {
          return (
            <ul>
              {/* <img src={IMG_CDN + item.cloudinaryImageId} /> */}
              <li key={item.id}>{item.name}</li>
              <li>{item.price}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default ResturantMenu;
