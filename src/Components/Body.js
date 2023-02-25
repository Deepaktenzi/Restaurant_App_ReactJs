import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import {
  filterData,
  deliveryTimeSort,
  ratingSort,
  lowToHighSort,
  HighToLowSort,
} from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [DeliveryTimeRestaurants, setDeliveryTimeRestaurants] = useState([]);
  const [rattingRestaurants, setRattingRestaurants] = useState([]);
  const [lowPriceResturants, setLowPriceResturants] = useState([]);
  const [highPriceResturants, setHighPriceResturants] = useState([]);

  useEffect(() => {
    getResturantData();
  }, []);
  async function getResturantData() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.322232&lng=78.085605&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();

  if (!online) {
    return (
      <>
        <h1>You Are Offline, Check Connection </h1>
      </>
    );
  }

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search for restaurants and food"
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant_container ">
        <div className="resturant_nav ">
          <div className="resturant_count">
            {allRestaurants.length} Resturants
          </div>
          <div className="resturant_filter ">
            <button
              onClick={() => {
                const deliveryData = deliveryTimeSort(filterRestaurants);
                setDeliveryTimeRestaurants(deliveryData);
              }}
            >
              Delivery Time
            </button>
            <button
              onClick={() => {
                const ratingData = ratingSort(filterRestaurants);
                setRattingRestaurants(ratingData);
              }}
            >
              Rating
            </button>
            <button
              onClick={() => {
                const lowToHighData = lowToHighSort(filterRestaurants);
                setLowPriceResturants(lowToHighData);
              }}
            >
              Cost: Low To High
            </button>
            <button
              onClick={() => {
                const HighToLowData = HighToLowSort(filterRestaurants);
                setHighPriceResturants(HighToLowData);
              }}
            >
              Cost: High To Low
            </button>
          </div>
        </div>

        <div className="resturant-list ">
          {filterRestaurants.length == 0 ? (
            <h1>No Data Found</h1>
          ) : DeliveryTimeRestaurants != 0 ? (
            DeliveryTimeRestaurants.map((restaurant) => {
              return (
                <Link to={'/resturant/' + restaurant.data.id}>
                  <RestaurantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                </Link>
              );
            })
          ) : rattingRestaurants != 0 ? (
            rattingRestaurants.map((restaurant) => {
              return (
                <Link to={'/resturant/' + restaurant.data.id}>
                  <RestaurantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                </Link>
              );
            })
          ) : lowPriceResturants != 0 ? (
            lowPriceResturants.map((restaurant) => {
              return (
                <Link to={'/resturant/' + restaurant.data.id}>
                  <RestaurantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                </Link>
              );
            })
          ) : highPriceResturants != 0 ? (
            highPriceResturants.map((restaurant) => {
              return (
                <Link to={'/resturant/' + restaurant.data.id}>
                  <RestaurantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                </Link>
              );
            })
          ) : (
            filterRestaurants.map((restaurant) => {
              return (
                <Link to={'/resturant/' + restaurant.data.id}>
                  <RestaurantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Body;
