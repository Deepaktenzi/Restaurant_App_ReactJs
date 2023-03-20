import { useEffect, useState } from 'react';
const useRestaurant = () => {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    getResturantData();
  }, []);
  async function getResturantData() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.322232&lng=78.085605&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setResturants(json?.data?.cards[1]?.data?.data?.cards);
  }

  return resturants;
};
export default useRestaurant;
