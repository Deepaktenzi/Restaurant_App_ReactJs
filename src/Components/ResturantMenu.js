import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { async } from 'regenerator-runtime';
import { IMG_CDN } from '../const';
import Shimmer from './Shimmer';

const ResturantMenu = () => {
  const params = useParams();
  const [restaurant, setResturant] = useState(null);
  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=30.322232&lng=78.085605&menuId=' +
        params.id
    );
    const json = await data.json();
    setResturant(json.data);
  };

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
