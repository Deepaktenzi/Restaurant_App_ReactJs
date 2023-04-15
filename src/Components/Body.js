import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { FETCH_RESTAURANTS_URL } from '../const';
import {
  filterData,
  deliveryTimeSort,
  ratingSort,
  lowToHighSort,
  HighToLowSort,
} from '../utils/helper';
import useOnline from '../utils/useOnline';
import Nodatafound from './Nodatfound';
import Coursels from './Coursels';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [carousels, setCarousels] = useState([]);

  useEffect(() => {
    getResturantData();
  }, []);
  async function getResturantData() {
    try {
      const data = await fetch(FETCH_RESTAURANTS_URL);
      const json = await data.json();

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setCarousels(json?.data?.cards[0]?.data?.data?.cards);
    } catch (e) {
      console.log(e);
    }
  }

  const online = useOnline();

  if (!online) {
    return (
      <>
        <h1>You Are Offline, Check Connection </h1>
      </>
    );
  }

  return (
    <>
      <div className="coursels_container">
        <div className="coursels_main">
          {carousels.length == 0
            ? null
            : carousels.slice(0, 4).map((coursel) => {
                return <Coursels {...coursel.data} />;
              })}
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          name="search"
          className="search_bar"
          pattern="[A-Za-z]*"
          autoComplete="off"
          onChange={(e) => {
            const data = filterData(e.target.value, allRestaurants);
            setFilterRestaurants(data);
          }}
          placeholder="Search for restaurants and food"
        />
      </div>
      {allRestaurants?.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="resturant_container ">
          <div className="resturant_nav ">
            <div className="resturant_count">
              {allRestaurants?.length} Resturants
            </div>
            <div className="resturant_filter ">
              <button
                onClick={() => {
                  const timeSort = deliveryTimeSort(filterRestaurants);
                  setFilterRestaurants([...timeSort]);
                }}
              >
                Delivery Time
              </button>
              <button
                onClick={() => {
                  const ratingData = ratingSort(filterRestaurants);
                  setFilterRestaurants([...ratingData]);
                }}
              >
                Rating
              </button>
              <button
                onClick={() => {
                  const lowToHighData = lowToHighSort(filterRestaurants);
                  setFilterRestaurants([...lowToHighData]);
                }}
              >
                Cost: Low To High
              </button>
              <button
                onClick={() => {
                  const HighToLowData = HighToLowSort(filterRestaurants);
                  setFilterRestaurants([...HighToLowData]);
                }}
              >
                Cost: High To Low
              </button>
            </div>
          </div>

          <div className="resturant-list ">
            {filterRestaurants?.length == 0 ? (
              <Nodatafound />
            ) : (
              filterRestaurants?.map((restaurant) => {
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
      )}
    </>
  );
};
export default Body;
