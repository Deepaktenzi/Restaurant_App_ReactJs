import RestaurantCard from './RestaurantCard';
import { resturantsList } from '../const';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

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
            // const data = filterData(searchText, restaurants);
            // setRestaurants(data);
          }}
          placeholder="Search for restaurants and food"
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            // if (searchText) {
            setFilterRestaurants(data);
            // } else {
            //   setRestaurants(resturantsList);
            // }
          }}
        >
          Search
        </button>
      </div>

      <div className="resturant-list">
        {filterRestaurants.length == 0 ? (
          <h1>No Data Found</h1>
        ) : (
          filterRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
